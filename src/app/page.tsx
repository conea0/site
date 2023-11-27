import { Header } from "@/app/header/header";
import { Button } from "@/components/button/button";
import { FlexBox, Text, TextBox } from "@/components/common/flexBox";
import { ImageBox } from "@/components/common/imageBox/imageBox";
import { Navbar } from "@/components/common/navbar/navbar";
import { Section } from "@/components/common/section/section";

const menuItems = [
  {
    name: "Service",
    path: "#",
  },
  {
    name: "About",
    path: "#",
  },
  {
    name: "Recruit",
    path: "#",
  },
  {
    name: "Contact",
    path: "#",
  },
];

const textBoxItems = [
  {
    icon: "/done.svg",
    title: "hogehoge",
    children:
      "Static assets. API hosting. Serverless and Edge Functions. With a global network defined entirely by your code, you can focus on just that—the craft of coding.",
  },
  {
    icon: "/terminal.svg",
    title: "hogehoge",
    children:
      "Static assets. API hosting. Serverless and Edge Functions. With a global network defined entirely by your code, you can focus on just that—the craft of coding.",
  },
  {
    icon: "/x.png",
    title: "hogehoge",
    children:
      "Static assets. API hosting. Serverless and Edge Functions. With a global network defined entirely by your code, you can focus on just that—the craft of coding.",
  },
];

export default function LLMCourse() {
  return (
    <>
      <Navbar menu={menuItems}></Navbar>
      <Header />
      <Section>
        <Text
          title="マジで最高に最強な会社"
          text="Static assets. API hosting. Serverless and Edge Functions. With a global network defined entirely by your code, you can focus on just that—the craft of coding."
          width="full"
        >
          <Button path="#" color="black" size="large">
            こんにちは
          </Button>
        </Text>
      </Section>
      <Section>
        <ImageBox image={"/screen/laptop.jpg"} width="full"></ImageBox>
      </Section>
      <FlexBox>
        {textBoxItems.map((item) => (
          <TextBox
            icon={item.icon}
            iconSize="normal"
            color="white"
            title={item.title}
            key={item.title}
          >
            {item.children}
          </TextBox>
        ))}
      </FlexBox>
      <FlexBox>
        <Text
          title={"超クールなサービス"}
          text={
            "Static assets. API hosting. Serverless and Edge Functions. With a global network defined entirely by your code, you can focus on just that—the craft of coding."
          }
          width="half"
          gradient
        >
          <Button path="#" color="black" size="large">
            こんにちは
          </Button>
        </Text>
        <ImageBox image={"/screen/programming.jpg"} width="half"></ImageBox>
      </FlexBox>
      <h1>あとは適当</h1>
    </>
  );
}
