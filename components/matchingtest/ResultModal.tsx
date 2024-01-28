import React, { useState, useEffect } from 'react';

import { LinkLogo, Klogo } from '@/public/images';

interface ResultModalProps {
  onClose: () => void;
}

const ResultModal = ({ onClose }: ResultModalProps) => {
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (showAlert) {
      timer = setTimeout(() => {
        setShowAlert(false);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [showAlert]);

  const copyToClipboardFallback = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      setAlertMessage('URL이 클립보드에 복사되었습니다!');
      setShowAlert(true);
    } catch (err) {
      setAlertMessage('URL 복사에 실패했습니다.');
      setShowAlert(true);
    } finally {
      document.body.removeChild(textArea);
    }
  };

  const copyToClipboard = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          setAlertMessage('URL이 클립보드에 복사되었습니다!');
          setShowAlert(true);
        })
        .catch(() => {
          setAlertMessage('URL 복사에 실패했습니다.');
          copyToClipboardFallback(window.location.href);
        });
    } else {
      copyToClipboardFallback(window.location.href);
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClose();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Close modal"
    >
      <div
        className="bg-white p-6 w-[321px] h-[189px] rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={() => {}}
        role="none"
      >
        <div className="h1 text-center mb-4">공유하기</div>
        <div className="flex flex-row justify-center gap-x-10 h2">
          <div className="flex flex-col">
            <div className="mb-2">
              <Klogo />
            </div>
            <div>카카오톡</div>
          </div>
          <div
            className="flex flex-col"
            onClick={copyToClipboard}
            onKeyDown={(e) => {
              if (e.key === 'Enter') copyToClipboard();
            }}
            role="button"
            tabIndex={0}
          >
            <div className="mb-2">
              <LinkLogo />
            </div>
            <div>URL복사</div>
          </div>
        </div>
      </div>

      {showAlert && (
        <div className="absolute bg-white p-4 rounded-lg shadow-lg">
          <p>{alertMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ResultModal;