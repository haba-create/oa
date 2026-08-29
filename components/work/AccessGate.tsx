import SiteHeader from "../site/SiteHeader";
import { unlockWork } from "../../app/work/actions";

type AccessGateProps = {
  from: string;
  denied?: boolean;
};

export default function AccessGate({ from, denied = false }: AccessGateProps) {
  return (
    <>
      <SiteHeader context="PRIVATE" project hideAction />
      <main>
        <section className="gate">
          <p className="caps">CASE STUDIES</p>
          <h1 className="head">SHARED PRIVATELY.</h1>
          <p className="gate__fine fineprint">Case studies are shared with an access code. If you don&rsquo;t have one, email me and I&rsquo;ll send it over.</p>
          <form action={unlockWork}>
            <input type="hidden" name="from" value={from} />
            <label className="sr-only" htmlFor="access-code">Access code</label>
            <input id="access-code" name="code" type="password" placeholder="ACCESS CODE" autoComplete="off" autoFocus required />
            <button type="submit">ENTER →</button>
          </form>
          {denied && <p className="gate__error caps" role="alert">THAT CODE DIDN&rsquo;T MATCH.</p>}
          <p className="gate__contact"><a className="back-link caps" href="mailto:obenewa@obenewa.co.uk">EMAIL ME</a></p>
        </section>
      </main>
    </>
  );
}
