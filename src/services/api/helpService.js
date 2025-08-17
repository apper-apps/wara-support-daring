import categoriesData from "@/services/mockData/categories.json"
import articlesData from "@/services/mockData/articles.json"
import contactData from "@/services/mockData/contact.json"

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const helpService = {
  async getCategories() {
    await delay(300)
    return [...categoriesData]
  },

  async getCategoryById(id) {
    await delay(250)
    const category = categoriesData.find(cat => cat.Id === parseInt(id))
    return category ? { ...category } : null
  },

  async getArticlesByCategory(categoryId) {
    await delay(300)
    return articlesData.filter(article => article.categoryId === categoryId).map(article => ({ ...article }))
  },

  async getArticleById(id) {
    await delay(250)
    const article = articlesData.find(art => art.Id === parseInt(id))
    return article ? { ...article } : null
  },

  async searchArticles(query) {
    await delay(200)
    if (!query || query.length < 2) return []
    
    const lowerQuery = query.toLowerCase()
    return articlesData
      .filter(article => 
        article.question.toLowerCase().includes(lowerQuery) ||
        article.answer.toLowerCase().includes(lowerQuery) ||
        article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      )
      .map(article => ({ ...article }))
  },

  async getContactInfo() {
    await delay(200)
    return { ...contactData }
  },

  async updateArticleRating(articleId, isHelpful) {
    await delay(300)
    const article = articlesData.find(art => art.Id === parseInt(articleId))
    if (article) {
      if (isHelpful) {
        article.helpful += 1
      } else {
        article.notHelpful += 1
      }
      return { ...article }
    }
    return null
  }
}