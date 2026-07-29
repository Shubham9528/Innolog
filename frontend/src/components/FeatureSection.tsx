import { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Sliders, 
  Search, 
  Play, 
  Pause, 
  Copy, 
  Check, 
  Activity, 
} from 'lucide-react';

interface LogEntry {
  id: string;
  timestamp: string;
  level: 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';
  service: string;
  message: string;
  latency: string;
}

const SAMPLE_LOGS: Omit<LogEntry, 'id' | 'timestamp'>[] = [
  { level: 'INFO', service: 'auth-service', message: 'User token validated successfully uid=usr_89234', latency: '1.2ms' },
  { level: 'INFO', service: 'telemetry-collector', message: 'Flushed batch of 15,000 hardware metrics to store', latency: '2.8ms' },
  { level: 'WARN', service: 'db-pool-primary', message: 'Connection queue reached 78% capacity threshold', latency: '12.4ms' },
  { level: 'DEBUG', service: 'ingress-controller', message: 'HTTP GET /health status=200 payload=34b', latency: '0.4ms' },
  { level: 'ERROR', service: 'payment-gateway', message: 'Provider timeout on retry attempt #2 (gateway_err_504)', latency: '450.1ms' },
  { level: 'INFO', service: 'cpu-monitor-agent', message: 'Node cluster-west-02 load avg 0.42 [healthy]', latency: '0.8ms' },
];

export default function FeatureSection() {
  // Live Log Stream State
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isStreaming, setIsStreaming] = useState(true);
  const [filterLevel, setFilterLevel] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  // Initialize and stream logs dynamically
  useEffect(() => {
    // Initial batch
    // const initial: LogEntry[] = SAMPLE_LOGS.map((log, idx) => ({
    //   ...log,
    //   id: `log-${Date.now()}-${idx}`,
    //   timestamp: new Date(Date.now() - (6 - idx) * 1200).toISOString().split('T')[1].slice(0, 12),
    // }));
    // setLogs(initial);

    // Stream interval
    const interval = setInterval(() => {
      if (!isStreaming) return;
      const randomSample = SAMPLE_LOGS[Math.floor(Math.random() * SAMPLE_LOGS.length)];
      const newLog: LogEntry = {
        ...randomSample,
        id: `log-${Date.now()}-${Math.random()}`,
        timestamp: new Date().toISOString().split('T')[1].slice(0, 12),
      };

      setLogs((prev) => [newLog, ...prev.slice(0, 19)]);
    }, 2000);

    return () => clearInterval(interval);
  }, [isStreaming]);

  const filteredLogs = logs.filter((log) => {
    const matchesLevel = filterLevel === 'ALL' || log.level === filterLevel;
    const matchesQuery =
      searchQuery === '' ||
      log.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.message.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesQuery;
  });

  const handleCopyLogs = () => {
    const text = filteredLogs.map((l) => `[${l.timestamp}] [${l.level}] [${l.service}]: ${l.message} (${l.latency})`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="features" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">

        {/* COMBINATION 1: Text Left + Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 font-semibold text-xs border border-indigo-100">
              <Terminal className="w-3.5 h-3.5" />
              High-Velocity Log Ingestion
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Ingest Millions of Events <br className="hidden sm:inline" />
              <span className="text-indigo-600">With Zero Latency Bottlenecks</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              INNOLOG decouples log collection from application execution using low-overhead asynchronous buffers. Filter, parse, and query millions of log streams effortlessly with instant indexed search.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Structured & Unstructured Log Parsing</h4>
                  <p className="text-xs text-slate-500">Auto-detect JSON, Syslog, Apache, NGINX, and custom microservice log payloads.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Sub-Second Indexing & Querying</h4>
                  <p className="text-xs text-slate-500">Retrieve log lines across hundreds of nodes in under 5ms without schema lockups.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Automated Alert Triggers</h4>
                  <p className="text-xs text-slate-500">Configure instant Slack, Webhook, and PagerDuty notifications when error rates spike.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-emerald-400 rounded-2xl opacity-25 blur-md group-hover:opacity-35 transition-opacity" />
              <div className="relative rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden shadow-xl">
                <img
                  src="/log-stream.png"
                  alt="INNOLOG Log Stream UI"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* COMBINATION 2: Image Left + Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-2xl opacity-25 blur-md group-hover:opacity-35 transition-opacity" />
              <div className="relative rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden shadow-xl">
                <img
                  src="/hardware-analytics.png"
                  alt="Hardware Telemetry Metrics"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 font-semibold text-xs border border-emerald-100">
              <Cpu className="w-3.5 h-3.5" />
              Hardware Telemetry & Node Insights
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Monitor Infrastructure Health <br className="hidden sm:inline" />
              <span className="text-emerald-600">Down to the Bare Metal</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Never get blind-sided by hardware degradation. Track CPU per-core usage, thermal thresholds, memory allocation, and disk IOPS alongside your application log streams in a single unified glass pane.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-base mb-1">
                  <Activity className="w-4 h-4" /> &lt;0.4% Overhead
                </div>
                <p className="text-xs text-slate-500">Lightweight daemon compiled with zero external runtime dependencies.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-base mb-1">
                  <Sliders className="w-4 h-4" /> Dynamic Sampling
                </div>
                <p className="text-xs text-slate-500">Intelligently scale telemetry metrics sampling during traffic spikes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE DEMO SECTION: Live Log Stream Terminal Widget */}
        <div id="live-demo" className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Interactive Preview</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Live Console & Log Stream Engine
            </h3>
            <p className="text-sm text-slate-500 mt-2">
              Experience live streaming logs with filtering and sub-millisecond search simulation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl border border-slate-300 bg-slate-900 text-slate-100 shadow-2xl overflow-hidden">
            {/* Terminal Top Control Bar */}
            <div className="px-4 py-3 bg-slate-800/90 border-b border-slate-700/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                  innolog-cli tail --cluster=prod-us-east
                </span>
              </div>

              {/* Filter Tabs & Controls */}
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex bg-slate-900/80 p-0.5 rounded-lg border border-slate-700/60 text-xs font-mono">
                  {['ALL', 'INFO', 'WARN', 'ERROR', 'DEBUG'].map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setFilterLevel(lvl)}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        filterLevel === lvl
                          ? 'bg-indigo-600 text-white font-semibold shadow'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setIsStreaming(!isStreaming)}
                  className={`p-1.5 rounded-lg border text-xs font-medium flex items-center gap-1 transition-colors ${
                    isStreaming
                      ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/20'
                      : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                  }`}
                  title={isStreaming ? 'Pause Stream' : 'Resume Stream'}
                >
                  {isStreaming ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">{isStreaming ? 'Pause' : 'Live'}</span>
                </button>

                <button
                  onClick={handleCopyLogs}
                  className="p-1.5 rounded-lg bg-slate-700/60 border border-slate-600/60 text-slate-300 hover:bg-slate-700 text-xs flex items-center gap-1 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Search Input Bar */}
            <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Filter logs by service or keyword (e.g., auth, payload, retry)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-xs text-slate-200 font-mono focus:outline-none placeholder-slate-500"
              />
            </div>

            {/* Log Stream Body */}
            <div className="p-4 font-mono text-xs space-y-2 h-72 overflow-y-auto custom-scrollbar bg-slate-950/90">
              {filteredLogs.length === 0 ? (
                <div className="text-center text-slate-500 py-12 font-sans">
                  No logs matching filter level "<span className="text-indigo-400 font-mono">{filterLevel}</span>" or query "<span className="text-indigo-400 font-mono">{searchQuery}</span>".
                </div>
              ) : (
                filteredLogs.map((log) => (
                  <div
                    key={log.id}
                    className="flex flex-wrap sm:flex-nowrap items-baseline gap-2 py-1 px-2 rounded hover:bg-slate-800/60 transition-colors border-b border-slate-900/60"
                  >
                    <span className="text-slate-500 select-none text-[11px] shrink-0">{log.timestamp}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                        log.level === 'INFO'
                          ? 'bg-blue-950 text-blue-400 border border-blue-800/40'
                          : log.level === 'WARN'
                          ? 'bg-amber-950 text-amber-400 border border-amber-800/40'
                          : log.level === 'ERROR'
                          ? 'bg-red-950 text-red-400 border border-red-800/40 animate-pulse'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {log.level}
                    </span>
                    <span className="text-indigo-300 font-semibold shrink-0">[{log.service}]</span>
                    <span className="text-slate-300 flex-1 truncate">{log.message}</span>
                    <span className="text-slate-500 text-[10px] ml-auto shrink-0">{log.latency}</span>
                  </div>
                ))
              )}
            </div>

            {/* Terminal Footer Status Bar */}
            <div className="px-4 py-2 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Status: Ingesting • {filteredLogs.length} events listed</span>
              </div>
              <div className="text-slate-500 hidden sm:block">
                Press Esc to clear search
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
