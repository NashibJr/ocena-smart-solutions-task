import React from "react";
import Input from "../components/Input";
import { FaCheck } from "react-icons/fa6";
import Button from "../components/Button";

const Home = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  return (
    <div className="sm:flex sm:justify-center items-center mt-28">
      <div className="p-5 sm:w-[500px] md:w-[600px]">
        <form className="w-full flex flex-col gap-1">
          <Input label="Name:" type="text" name="name" />
          <Input label="Course:" isSelect={true} name="course" />
          <div className="mt-1 flex gap-2">
            <Button label="Submit" loading={loading} type="submit" />
            <Button
              label="Generate PDF"
              loading={loading}
              btnColor="bg-green-600"
              type="button"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
