import { LoadingState } from "@/helpers/enums";

export interface UserData {
  id: number | undefined;
  username: string | undefined;
  photo_url: string | undefined;
  first_name: string | undefined;
  last_name: string | undefined;
}

export interface InitSchema {
  initLoadingState: LoadingState;
  userData: UserData | null;
}
