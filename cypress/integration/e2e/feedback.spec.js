import FeadbackPage from '../../page-objects/pages/FeedbackPage'

describe('Feedback test', () => {
    before( () => {
        FeadbackPage.open()
    })

    it('fill and send feedback form', () => {
        FeadbackPage.submitFeedback()
    })

    it('should display sucess message', () => {
        FeadbackPage.displaySucessMessage()
    })
})