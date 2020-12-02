Apollo

NetworkStatus // The networkStatus property is a NetworkStatus enum that represents different loading states. Refetch is represented by NetworkStatus.refetch, and there are also values for polling and pagination. For a full list of all the possible loading states


refetch -- вручную переписывает кэш, polling -- задается в опциях, и интервал

notifyOnNetworkStatusChange: true -- перерисовывает компонент
if (networkStatus === NetworkStatus.refetch) return 'Refetching!'

useLazyQuery -- Выполняет действие по надобности

fetchPolicy -- By default, the useQuery hook checks the Apollo Client cache to see if all the data you requested is already available locally. If all data is available locally, useQuery returns that data and doesn't query your GraphQL server. This cache-first policy is Apollo Client's default fetch policy.

для добавления удаления  обновления нескольких сущностей mutation используем update в useMutation, обновление сущности проходит автоматически
