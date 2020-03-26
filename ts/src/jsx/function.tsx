// interface FooProp {
//   name: string;
//   X: number;
//   Y: number;
// }

// function AnotherComponent(prop: { name: string });
// function ComponentFoo(prop: FooProp) {
//   return <AnotherComponent name={prop.name} />;
// }
// const Button = (prop: { value: string }, context: { color: string }) => (
//   <button></button>
// );

// interface ClickableProps {
//   children: JSX.Element[] | JSX.Element;
// }
// interface HomeProps extends ClickableProps {
//   home: JSX.Element;
// }
// interface SideProps extends ClickableProps {
//   side: JSX.Element | string;
// }
// function MainButton(prop: HomeProps): JSX.Element;
// function MainButton(prop: SideProps): JSX.Element {}
