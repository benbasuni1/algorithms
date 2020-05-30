class Solution:
    def distanceBetweenBusStops(self, distance: List[int], start: int, destination: int) -> int:
      curr1 = start
      sum1 = 0
      curr2 = destination
      sum2 = 0

      while curr1 != destination:
        sum1 += distance[curr1]
        curr1 = (curr1 + 1) % len(distance)

      while curr2 != start:
        sum2 += distance[curr2]
        curr2 = (curr2 + 1) % len(distance)

      return min(sum1, sum2)



