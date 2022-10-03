import { PostCardComponent } from '../components';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <div className="wrapper bg-slate-50">
      <div className="flex flex-row">
        <div className="basis-4/12"></div>
        <div className="basis-4/12">
          <div className="flex flex-col items-center">
            <PostCardComponent></PostCardComponent>
            <PostCardComponent></PostCardComponent>
            <PostCardComponent></PostCardComponent>
          </div>
        </div>
        <div className="basis-4/12"></div>
      </div>
    </div>
  );
}

export default Index;
