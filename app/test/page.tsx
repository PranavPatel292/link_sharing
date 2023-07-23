import ImageInput from "../../components/CustomImageInput/ImageInput";
import CustomPhoneMockUp from "../../components/CustomPhoneMockUp/CustomPhoneMockUp";
import AddLinkBtn from "../../components/Link/AddLinkBtn";
import EmptyData from "../../components/Link/EmptyData";
import SaveBtn from "../../components/Link/SaveBtn";

const Page = async () => {
  return (
    <>
      <div className="flex flex-row space-x-5">
        <div className="w-[50%]">
          <CustomPhoneMockUp />
        </div>
        <div className="divide-y w-[50%] divide-gray-200">
          <div>
            <AddLinkBtn />
            <EmptyData />
          </div>
          <SaveBtn />C
        </div>
      </div>
    </>
  );
};

export default Page;
