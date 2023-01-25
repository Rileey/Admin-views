import "./listcomponent.css";

export const Close = (props, { fill }) => (
    <svg
      width={9}
      height={10}
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.49974 5.58574L11.4497 0.635742L12.8637 2.04974L7.91374 6.99974L12.8637 11.9497L11.4497 13.3637L6.49974 8.41374L1.54974 13.3637L0.135742 11.9497L5.08574 6.99974L0.135742 2.04974L1.54974 0.635742L6.49974 5.58574Z"
        fill={fill}
        fillOpacity={0.92}
      />
    </svg>
  );

export const Tag = ({title, onClick}) => (
	<div className="cover">
		<span className="text-title">
			{title}
		</span>
		<div onClick={onClick} className="click">
			<Close
				fill="yellow"
				className="cancel"
			/>
		</div>
	</div>
);