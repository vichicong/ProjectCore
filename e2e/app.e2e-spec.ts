import { IagencyAccountPage } from './app.po'

describe('iagency-account App', () => {
  let page: IagencyAccountPage

  beforeEach(() => {
    page = new IagencyAccountPage()
  })

  it('should display welcome message', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('Welcome to app!!')
  })
})
