const PromoBanner = ({children}:{
    children: React.ReactNode
}) => {
    return (<div>
      <div className="border text-center">
        20% off for next 3 days
      </div>
      {children}
      </div>
    );
  };
  
  export default PromoBanner;
  