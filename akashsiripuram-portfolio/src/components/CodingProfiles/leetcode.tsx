import { GetServerSideProps } from 'next';

type Props = {
  totalSolved: number;
  totalQuestions: number;
};

export default function LeetCodePage({ totalSolved, totalQuestions }: Props) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">LeetCode Stats</h1>
      <p>Total Solved: {totalSolved}</p>
      <p>Total Questions: {totalQuestions}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            submitStats {
              acSubmissionNum {
                difficulty
                count
              }
            }
          }
        }
      `,
      variables: { username: 'Akash_siripuram' }
    }),
  });

  const data = await response.json();
  const stats = data.data?.matchedUser?.submitStats?.acSubmissionNum ?? [];
  const totalSolved = stats.reduce((sum: number, item: any) => sum + item.count, 0);
  const totalQuestions = stats.find((item: any) => item.difficulty === 'All')?.count || 0;

  return {
    props: { totalSolved, totalQuestions },
  };
};
