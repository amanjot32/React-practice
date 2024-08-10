import React, { useEffect, useState } from 'react';
import { getArticles } from '../../core/services/newsServices';
import { Article } from '../../core/models/article';
import NewsTile from '../../core/components/news_tile';
import { truncateText } from '../../core/utils/truncate';

const NewsList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopHeadlines = async () => {
      try {
        const data = await getArticles();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching top headlines:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopHeadlines();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-purple font-bold">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {articles.map((article, index) => (
          <div key={index}>
            <NewsTile
              title={article.title}
              desc={truncateText(article.description, 17)}
              url={article.url}
              imgUrl={article.urlToImage || ''}
              authorName={article.author || ''}
              date={article.publishedAt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
