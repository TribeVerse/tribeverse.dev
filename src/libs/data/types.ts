export enum SocialVendor {
  GITHUB = "github",
  LINKEDIN = "linkedin",
}

export type Social = {
  [key in SocialVendor]?: {
    label: string;
    url: string;
    icon: string;
  };
};

export type Contact = {
  profileImg: string;
  name: string;
  title: string;
  email: string;
  intro: string;
  social: Social;
};