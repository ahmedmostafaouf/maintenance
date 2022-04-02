import sanctumDefaultConfig from './sanctumDefaultConfig'

export default class SanctumService {
    // Will be used by this service for making API calls
    axiosIns = null

    // sanctumConfig <= Will be used by this service
    sanctumConfig = { ...sanctumDefaultConfig }

    // For Refreshing Token
    isAlreadyFetchingAccessToken = false

    // For Refreshing Token
    subscribers = []

    constructor(axiosIns, sanctumOverrideConfig) {
      this.axiosIns = axiosIns
      this.sanctumConfig = { ...this.sanctumConfig, ...sanctumOverrideConfig }
    }

    login(...args) {
      return this.axiosIns.post(this.sanctumConfig.loginEndpoint, ...args)
    }

    setToken(value) {
      localStorage.setItem(this.sanctumConfig.storageTokenKeyName, value)
    }

  /* register(...args) {
      return this.axiosIns.post(this.jwtConfig.registerEndpoint, ...args)
    }

    refreshToken() {
      return this.axiosIns.post(this.jwtConfig.refreshEndpoint, {
        refreshToken: this.getRefreshToken(),
      })
    } */
}
