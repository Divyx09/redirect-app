import BulkUrlInput from "@/components/BulkUrlInput";

export default async function BulkChecker() {
  return (
    <div className='row mx-0 justify-content-center'>
      <div className='col-8 my-5'>
        <h1 className='text-white fw-bold text-center'>
          Bulk Redirect Checker Tool
        </h1>
        <h3 className='text-white fw-bold text-center'>
          Check Bulk HTTP Header Response & Redirect Chains for Multiple URLs
        </h3>
        <BulkUrlInput />
        <h5 className='text-white fw-bold'>Redirect Checker Options:</h5>
        <p className='text-white fw-bold'>
          You want to check your redirect with a specific user-agent. Just
          select the browser user-agent to test your redirect.
        </p>

        <div>
          <label className='text-white w-100'>Set User-Agent:</label>
          <select className='w-100' id='user-agent'>
            <option>DEFAULT (ToolBot)</option>
            <option>Chrome</option>
            <option>Firefox</option>
            <option>Safari</option>
          </select>
        </div>
      </div>
    </div>
  );
}
