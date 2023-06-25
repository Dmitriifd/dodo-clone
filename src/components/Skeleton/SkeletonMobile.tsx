import ContentLoader from 'react-content-loader';

const SkeletonMobile = (props: any) => {
  return (
    <ContentLoader
      speed={2}
      width={800}
      height={150}
      viewBox="0 0 800 150"
      backgroundColor="#ebecf0"
      foregroundColor="#9b9da1"
      {...props}>
      <rect x="8" y="21" rx="100" ry="100" width="112" height="111" />
      <rect x="143" y="32" rx="0" ry="0" width="443" height="7" />
      <rect x="144" y="110" rx="10" ry="10" width="88" height="22" />
      <rect x="143" y="54" rx="0" ry="0" width="443" height="7" />
      <rect x="144" y="79" rx="0" ry="0" width="443" height="7" />
    </ContentLoader>
  );
};

export { SkeletonMobile };
