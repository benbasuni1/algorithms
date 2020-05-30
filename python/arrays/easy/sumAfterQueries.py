class Solution:
    def sumEvenAfterQueries(self, A: List[int], queries: List[List[int]]) -> List[int]:

      result = []
      evenSum = 0

      for num in A:
        if num % 2 == 0:
          evenSum += num

      for query in queries:
        val, idx = query[0], query[1]

        old = A[idx]
        A[idx] += val
        new = A[idx]

        if new % 2 == 0:
          if old % 2 == 0:
            evenSum += val
          else:
            evenSum += new
        else:
          if old % 2 == 0:
            evenSum -= old

        result.append(evenSum)

      return result



