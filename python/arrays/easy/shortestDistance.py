class Solution:
    def shortestDistance(self, words: List[str], word1: str, word2: str) -> int:
      p1 = p2 = float(inf)
      result = float(inf)

      for idx, val in enumerate(words):
        if val == word1:
          p1 = idx
        elif val == word2:
          p2 = idx

        result = min(abs(p2 - p1), result)

      return result

