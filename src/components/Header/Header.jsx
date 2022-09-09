const Header = (props) => {
  const { category, title } = props;
  return (
    <div className='mb-10'>
      <p className='text-gray-400'>{category}</p>
      <p className='text-3xl font-extrabold tracking-light text-slate-900'>{title}</p>
    </div>
  );
};

export { Header };
