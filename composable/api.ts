export function $api<T>(
  request: Parameters<typeof $fetch<T>>[0],
  opts?: Parameters<typeof $fetch<T>>[1]
) {
  const { token, isAuthenticated } = useAuthStore();

  return $fetch<T>(request, {
    baseURL: "https://belaundry-api.sebaris.link/platform",
    ...opts,
    headers: {
      token: isAuthenticated ? token : "",
      ...opts?.headers,
    },
  });
}
