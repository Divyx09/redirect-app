import UrlInput from "@/components/UrlInput";

export default async function Home() {
  return (
    <div className='row mx-0 justify-content-center'>
      <div className='col-8 my-5'>
        <h1 className='text-white fw-bold text-center'>
          Check Your Redirects and Statuscode
        </h1>
        <h3 className='text-white fw-bold text-center'>
          301 vs 302, meta refresh & JavaScript redirects
        </h3>
        <UrlInput />
        <p className='text-white fw-bold'>
          Add http:// or https:// on your URL.
        </p>

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

        <p className='text-white fw-bold'>
          Check your URL redirect for accuracy. Do you use search engine
          friendly redirections like too many redirects, or do you lose link
          juice for SEO by redirects using HTTP Statuscode 301 vs. 302? Check
          now!
        </p>
      </div>
    </div>
  );
}
