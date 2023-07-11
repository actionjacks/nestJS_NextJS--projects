// constexpr to specyfikator, który można używać w języku C++ do oznaczenia, że wyrażenie lub funkcja jest obliczalna w czasie kompilacji i generuje wartość, która może być używana w kontekście wymagającym stałej.

// Oznaczenie czegoś jako constexpr pozwala na wykonywanie obliczeń w czasie kompilacji, zamiast w czasie wykonania programu. Dzięki temu można uzyskać wydajniejszy i bardziej deterministyczny kod, ponieważ obliczenia są wykonane w trakcie kompilacji, a nie za każdym razem, gdy program jest uruchamiany.

// Możemy używać constexpr do zdefiniowania stałych, funkcji i konstruktorów, które mogą być wywoływane w czasie kompilacji.

constexpr int factorial(int n)
{
  return (n <= 1) ? 1 : (n * factorial(n - 1));
}

constexpr int result = factorial(5);
