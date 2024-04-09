import { FC } from "react";

const PopupPage: FC = () => {
  return (
    <div className="flex flex-col text-center p-4 gap-4">
      <p className="text-xl font-bold">Hi, this is the popup page</p>
      <p className="text-sm italic">
        To start editing this page, open the src/pages/popup/popup_page.tsx
      </p>
      <p className="text-sm italic">
        To change the width, go to html/popup.html & change the body width
      </p>
    </div>
  );
};

export default PopupPage;
