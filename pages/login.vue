<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import { Input } from "@/components/ui/input";
import type { IResponse } from "@/model/response";
import { $api } from "@/composable/api";

const authStore = useAuthStore();
const router = useRouter();

const isAdmin = ref(true);

const formSchema = toTypedSchema(
  z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Invalid email" }),
    password: z.string(),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (body) => {
  const res = await $api<IResponse>("/user/sign-in", {
    method: "POST",
    body,
  });
  if (res.status) {
    authStore.setToken(res.response);
    authStore.setIsAdmin(isAdmin.value);
    const userInfo = await $api<IResponse>("/user/info", {
      method: "GET",
      headers: {
        token: res.response,
      },
    });

    if (userInfo.status) {
      authStore.setUser(userInfo.response);
      router.push({ path: isAdmin.value ? "/" : "/mobile" });
    }
  }
});
</script>

<template>
  <div class="flex justify-center items-center h-full">
    <Card class="w-[350px]">
      <form @submit="onSubmit">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="grid items-center w-full gap-4">
            <div class="flex flex-col space-y-1.5">
              <FormField v-slot="{ componentField }" name="email">
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter email"
                      v-bind="componentField"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
            <div class="flex flex-col space-y-1.5">
              <FormField v-slot="{ componentField }" name="password">
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      v-bind="componentField"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
            <div class="flex items-center space-x-2">
              <Switch
                id="is-admin"
                :checked="isAdmin"
                @update:checked="(e) => (isAdmin = e)"
              />
              <Label for="is-admin">{{
                `Log In as ${isAdmin ? "Admin" : "User"}`
              }}</Label>
            </div>
          </div>
        </CardContent>
        <CardFooter class="flex justify-between px-6 pb-6">
          <Button type="submit" class="w-full">Log In</Button>
        </CardFooter>
      </form>
    </Card>
  </div>
</template>

<style></style>
