import styled from "styled-components";
import tw from "twin.macro";

// attrs에 클래스명을 사용한다!
const StyledForm = styled.main.attrs({
  className:
    "flex flex-col h-screen justify-center items-center bg-gray-100 font-sans",
})`
  & {
    h3 {
      ${tw`mt-1 mb-6 max-w-2xl font-medium font-bold text-gray-500`}
    }
    form {
      ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
    }
    input {
      ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
    }
    button {
      ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded`}
    }
  }
`;
export default StyledForm;
