import React from 'react';
import { Onboarding1 } from '@/public/images';
const Slide1 = () => {
  return (
    <div>
      <div className="py-8"></div>
      <div className="h0 px-4">
        <div>익숙한 비유로 향을 상상하고,</div>
        <div>알고 싶던 특징을 한눈에 파악하고,</div>
      </div>
      <div className="body1 text-acodegray-400 px-4 pt-5">
        <div>떠올리기 쉬운 향 비유로 향료 용어 이해</div>
        <div>실제 사용자들의 리뷰 기반 향수 특징 파악</div>
      </div>
      <Onboarding1 />
    </div>
  );
};
export default Slide1;
