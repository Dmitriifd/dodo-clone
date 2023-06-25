import ContentLoader from 'react-content-loader';

const Skeleton = (props: any) => {
  return (
    <ContentLoader
      speed={2}
      width={290}
      height={480}
      viewBox="0 0 290 480"
      backgroundColor="#ebecf0"
      foregroundColor="#9b9da1"
      {...props}>
      <circle cx="126" cy="107" r="104" />
      <rect x="128" y="416" rx="5" ry="5" width="111" height="34" />
      <rect x="22" y="319" rx="5" ry="5" width="220" height="10" />
      <rect x="20" y="244" rx="5" ry="5" width="220" height="10" />
      <rect x="21" y="282" rx="5" ry="5" width="220" height="10" />
      <rect x="22" y="427" rx="0" ry="0" width="83" height="16" />
    </ContentLoader>
  );
};

export { Skeleton };
