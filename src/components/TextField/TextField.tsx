type IProps = {
  [x: string]: unknown;
};

const TextField = ({ ...rest }: IProps) => {
  return (
    <>
      <label className="flex flex-col gap-2">
        <input
          type="text"
          className="placeholder-gray-300 bg-slate-950 border-b border-slate-400 py-3 px-7 hover:bg-slate-800 active:hover:bg-slate-800 outline-none"
          {...rest}
        />
      </label>
    </>
  );
};

export default TextField;
