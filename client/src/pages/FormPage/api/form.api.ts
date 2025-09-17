import { api } from "@/app/store/api";
import { FormDataType } from "@/shared/slices/formSlice";

interface Response {
  accessToken: boolean;
}

export const formApi = api.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation<Response, FormDataType>({
      query: (body) => ({
        url: "/messages",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSendMessageMutation } = formApi;
