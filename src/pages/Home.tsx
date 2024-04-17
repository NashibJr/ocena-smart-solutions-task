import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

interface UserProps {
  name: string;
  course: string;
}

const Home = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<UserProps>({
    course: "mtech",
    name: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) =>
    setUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (!user) {
      console.log("No user found");
    }
    console.log(user);
    setIsSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="sm:flex sm:justify-center items-center mt-28">
      <div className="p-5 sm:w-[500px] md:w-[600px]">
        <form className="w-full flex flex-col gap-1" onSubmit={handleSubmit}>
          <Input
            label="Name:"
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
          <Input
            label="Course:"
            isSelect={true}
            name="course"
            value={user.course}
            onChange={handleChange}
          />
          <p
            className={`mt-2 text-green-600 font-semibold flex gap-1 ${
              !isSubmitted && "hidden"
            }`}
          >
            <IoCheckmarkCircleSharp className="mt-1" />
            Successfully submitted, now you can generate the PDF copy.
          </p>
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
