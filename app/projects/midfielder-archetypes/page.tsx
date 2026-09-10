import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-[#404040] tracking-wide leading-tight text-white px-12 py-2">
        
        {/* Navigation */}
        <nav className="sticky top-0 z-50 mb-10 flex items-center justify-between bg-[#303030] py-6 border-b border-white/30">
            <Link 
                href="/" 
                className="transition duration-200 text-xl font-bold hover:scale-110 hover:text-white"
            >
            Home
            </Link>

            <div className="flex gap-8 text-sm text-gray-400">
                <Link 
                    href="/about" 
                    className="transition duration-200 hover:scale-110 hover:text-white"
                >
                    About
                </Link>

                <Link 
                    href="/projects" 
                    className="transition duration-200 hover:scale-110 hover:text-white"
                >
                    Projects
                </Link>

                <Link 
                    href="/match-reports" 
                    className="transition duration-200 hover:scale-110 hover:text-white"
                >
                    Match Reports
                </Link>

                <Link 
                    href="/contact" 
                    className="transition duration-200 hover:scale-110 hover:text-white"
                >
                    Contact
                </Link>
            </div>
        </nav>

        {/* Introduction */}
        <section className="mb-18 mx-auto max-w-6xl">
            <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-6xl">
                The Identification of Distinct Midfielder Archetypes in Modern Football
            </h1>

            <p className="mb-5 text-md font-medium tracking-[0.25em] text-gray-500">
                UNSUPERVISED LEARNING · PLAYER PROFILING
            </p>

            <p className="text-lg">
                Traditional football analysis often classifies midfielders into three generic roles: central midfielders (CMs),
                defensive midfielders (DMs) and attacking midfielders (AMs). However, modern tactical systems have blurred
                these lines and created far more fluid roles. This project uses unsupervised learning techniques to identify 
                distinct midfielder archetypes based on performance metrics, providing a more nuanced understanding of player 
                roles in modern football.
            </p>
        </section>

        {/* Methodology */}
       <section className="mb-18 mx-auto max-w-6xl">
            <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-4xl">
                Methodology
            </h2>

            <h3 className="mb-4 text-xl font-bold tracking-tight md:text-2xl">
                01. Data Collection and Preprocessing
            </h3>

            <p className="mb-4 text-lg"> 
                The dataset, taken from the 2024/25 season, contains a 456 midfielders playing in Europe's top five leagues. 
                It contains a range of defensive, creative and possession-based metrics, expressed in raw, per 90 and success-rate 
                formats, alongside basic player information such as position, nationality, and preferred foot. 
            </p>
            <p className="mb-4 text-lg">
                This analysis primarily used per 90 stats to standardise player performance across differing playing times. 
                However, per 90 stats are unreliable with small sample sizes. For example a player who plays 45 minutes and scores once 
                will have a misleading rate of 2 goals per 90 stat of 2. Therefore, all players who played fewer than 900 minutes (10 full games) 
                across the season were removed from the data set to reduce noise and improve staistical reliability.
            </p>

            <h3 className="mb-4 text-xl font-bold tracking-tight md:text-2xl">
                02. Feature Engineering
            </h3>
            <p className="mb-4 text-lg">
                Of the original 88 metrics in the dataset, 22 were selected and grouped together into five categories that are important to describe the profile of midfielders:
            </p>
            <ul className="mb-4 list-disc y-space-2 text-lg pl-6">
                <li><span className="font-bold">Progression</span> - Progressive Passes per 90, Passes Into the Penalty Area per 90, Progressive Runs per 90 and Dribbles per 90. </li>
                <li><span className="font-bold">Creativity</span> - Expected Assists per 90, Key Passes per 90, Shot Assists per 90 and Smart Passes per 90. </li>
                <li><span className="font-bold">Defensive Contributions</span> - Defensive Duels Won (%), Ariel Duels Won (%), Possession Adjusted Interceptions per 90 and Successful Defensive Actions per 90.</li>
                <li><span className="font-bold">Goal Scoring Threat</span> - Non-Penalty Goals per 90, Expected Goals per 90, Shots per 90 and Touches in the Box per 90.</li>
                <li><span className="font-bold">Possession Involvement</span> - Passes per 90, Accurate Short / Medium Passes per 90, Recieved Passes per 90, Successful Passes per 90, Back Passes per 90 and Lateral Passes per 90.</li>
            </ul>
            <p className="mb-4 text-lg">
                Both per 90 stats as well as percentage stats were used, to measure both involvement and efficinecy, providing a more reliable player profile. 
            </p>

            <h3 className="mb-4 text-xl font-bold tracking-tight md:text-2xl">
                03. Z-Score Standardisation 
            </h3>
            <p className="mb-4 text-lg">
                Before combining the metrics within each category, all features were standardised using Z-scores. This was a necessary step because raw football metrics exist on different scales, e.g. shots per 90 may be 3.4 while xG per 90 may be 0.08. Without scaling, high-magnitude metrics would dominate the aggregated scores.
            </p>
            <p className="mb-4 text-lg">
                Z-scores transform each statistic by measuring how far a player's performance is from the dataset mean in units of standard deviation. A value of 0 represents a perfectly average performance, while positive and negative scores indicate above and below-average perforamnce respectively. 
            </p>
            <p className="mb-4 text-lg">
                After standaradisation, the mean of all z-scores within each category is calculated to produce a single score, representing a player's performance within that category.
            </p>

            <h3 className="mb-4 text-xl font-bold tracking-tight md:text-2xl">
                04. Dimensionality Reduction
            </h3>
            <p className="mb-4 text-lg">
                After feature engineering, each player is represented by five scores, one for each category. However, it is impossible to visualise the 
                relationship between these in all five dimensions. To address this, dimensionality reduction techniques were used to reduce the data into 
                two dimensions. Dimensionality reduction achieves this by reducing complexity, while preserving the underlying structure of the data. 
                This means players that are statistically similar across the five categories should remain close together in the reduced two-dimensional space. 
                To ensure the robustness of the results, three different dimensionality reduction techniques were used: Principal Component Analysis (PCA), 
                t-distributed Stochastic Neighbour Embedding (t-SNE) and Uniform Manifold Approximation and Projection (UMAP). 
            </p>
            <h3 className="mb-4 text-xl font-bold tracking-tight md:text-2xl">
                05. Clustering
            </h3>
            <p className="mb-4 text-lg">
                After dimensionality reduction, the next step was to identify clusters of players with similar profiles. Clustering is an unsupervised 
                learning technique that groups data points based on their similarity. The K-Means clustering algorithm was used, which partitions the 
                data into K distinct clusters by minimizing the variance within each cluster. The key challenge was determining the optimal number of clusters, 
                which was determined using the Elbow Method and Silhouette Analysis, ensuring that the identified clusters were both meaningful and well-separated.
            </p>
            
            <h3 className="mb-4 text-xl font-bold tracking-tight md:text-2xl">
                06. Cluster Interpretation
            </h3>
            <p className="mb-4 text-lg">
                After clustering, the final step was to interpret the characteristics of each cluster. This involved analysing the average scores across the five categories for 
                each cluster, allowing for the identification of distinct midfielder archetypes. By examining these profiles, it was possible to understand the unique roles and 
                contributions of different types of midfielders in modern football.
            </p>
       </section>
        

        {/*Dimensionality Reduction*/}
        <section className="mb-18 mx-auto max-w-6xl">
            <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-4xl">
                Dimensionality Reduction
            </h2>

            <p className="mb-4 text-lg">
                Dimensionality reduction techniques were required to visualise the relationship between the five player categories in two-dimensional space.
                For the robustness of the analysis, three different techniques were trialied: Principal Component Analysis (PCA), t-distributed Stochastic Neighbour Embedding (t-SNE) and Uniform
                Manifold Approximation and Projection (UMAP). By comparing the effectiveness of these techniques in reducing complexity while preserving structure, we were ale to identify the
                most suitable method for visualising the structure of midfielder archetypes in modern football.
            </p>

            <h3 className="mb-4 text-xl font-bold tracking-tight md:text-2xl">
                Principal Component Analysis (PCA)
            </h3>
            <p className="mb-4 text-lg">
                   PCA is a linear method that projects the data onto directions of maximum variance. It serves as a simple and interpretable baseline but may fail to capture more complex, 
                   non-linear relationships between player attributes. To aid the interpretation of the PCA embedding, players are coloured according to their possession score. This demonstrates how PCA reduction works, projecting data onto directions of maximum variation, as seen by the clear gardient along the PC2 axis from bottom to top.
                   This was the result when PCA was applied to the midfielder dataset:
            </p>

            <iframe 
                src="/plots/midfielder-archetypes/pca.html"
                className="mb-4 h-[600px] w-full border-0"
                title="PCA visualisation"
            />

            <p className="mb-4 text-lg">
                Loading values explain what combination of the original cateogries contribute to the axes values PC1 and PC2 (principal components). We can interpret these components:
            </p> 

            <ul className="mb-4 list-disc y-space-2 text-lg pl-6">
                <li><span className="font-bold">PC1:</span> The strong positives loading values are creativity (0.63), progression (0.50) and goal threat (0.46), while the defensive loading score is negative (-0.27). So we can interpret PC1 as attacking involvement v defensive contribution. Players with a high PC1 score are creative players who are more involved in attacking sequences. While players with a low PC1 score are more defensive and less involved in possession.</li>
                <li><span className="font-bold">PC2:</span> The only strong positive loading score is possession (0.70), while the dominating negative is goal threat (-0.64). So we can interpret PC2 as direct goal threats v posssession-based controllers. Players with a lower PC2 score are less involved in possession and can be described as box threats, with a good goal scoring ability. Whereas, players with a higher PC2 score are much slower in possession, the midfielder controllers who dictate the tempo of the game.</li>
            </ul>

            <p className="mb-4 text-lg">
                Also we identified the variance explained by the two principal components. PC1 explains 47% of the variance and PC2 explains 25%, a total of 72%. So, nearly three quarters of the structure in five-dimensional space is presereved when compressed into two-dimensions. This suggests that the engineered category scores provide a compact and informative representation of player performance, suitable for visualisation and further analysis.
            </p>

            <h3 className="mb-4 text-xl font-bold tracking-tight md:text-2xl">
                t-distributed Stochastic Neighbour Embedding (t-SNE)
            </h3>
            <p className="mb-4 text-lg">
                t-SNE is a non-linear technique that focuses on preserving local relationships, often producing well-defined clusters of similar players. However, it can distort global structure and is sensitive to parameter choices.
            </p>

            <p className="mb-4 text-lg">
                t-SNE relies on one key hyperperameter, Perplexity, which controls the size of the local neighbourhood that each point considers when constructing the embedding. Lower perplexity focuses on very local structure and can lead to fragmented clusters, while high perplexity looks at global structure and might over-smooth the data.
            </p>

            <p className="mb-4 text-lg">
                To decide which value of perplexity was best, embeddings were generated for four values (5,15,25,50). The quality of each embedding was evaluated by measuring neighbourhood presevation, defined as the overlap between the k-nearest neighbours in the original 5-D space and the embbedded 2-D space, for which k = 10. These were the results:
            </p>
            <div className="mx-auto max-w-5xl">
                <iframe 
                    src="/plots/midfielder-archetypes/t-SNE.html"
                    className="mb-4 h-[650px] w-full border-0"
                    title="t-SNE visualisation"
                />
            </div>

            <p className="mb-4 text-lg">
                The results show that perplexities in the range 15-25 achieve the highest neighbourhood preservation (~ 57%), indicating the best balance between capturing local structure while maintaining global stability.
                The small variation in values suggests that the embedding is reasonably robust to the choice of perplexity, with 25 selected for future analysis.
            </p>

            <p className="mb-4 text-lg">
                To aid interpretation, the t-SNE embedding is coloured according to the possession score. Unlike the PCA projection, no clear global gradient is observed. This reflects the ability of t-SNE to preserve local relationships, where players with similar overall profiles may still differ in specific attributes such as possession behaviour.
            </p>

            <h3 className="mb-4 text-xl font-bold tracking-tight md:text-2xl">
                Uniform Manifold Approximation and Projection (UMAP)
            </h3>
            <p className="mb-4 text-lg">
                UMAP is another non-linear method that balances preservation of both local and global structure. It is generally faster and more stable than t-SNE, and is well-suited for uncovering both clusters and continuous gradients in player styles.
            </p>

            <p className="mb-4 text-lg">
                UMAP relies on two key hyperperameters, minimum distance and nearest neighbours.
                The minimum distance controls how tightly similar players are clustered in the embedded space. Lower values pack similar players closer together while higher values spread players out to emphasise broarder variation between clusters. 
                The nearest neighbours value controls how many nearby players are considers when builiding the structure. Lower values prioritise local structure, creating more fragmeneted clusters of highly specific micro roles. Whereas, higher values incorporate more global structure, resulting in smoother embeddings where clusters are more connected but less sharply separated.
            </p>

            <p className="mb-4 text-lg">
                To identify a stable configuration of these parameters, we evaluated combinations of:
            </p>

            <ul className="mb-4 text-lg list-disc pl-6">
                <li>Minimum distance: 0.01, 0.1, 0.5</li>
                <li>Nearest neighbours: 5, 15, 30</li>
            </ul>
            <p className="mb-4 text-lg">
                This resulted in the following nine different UMAP embeddings:
            </p>
            <div className="mx-auto max-w-5xl">

                <iframe 
                    src="/plots/midfielder-archetypes/UMAP.html"
                    className="mb-4 h-[925px] w-full border-0"
                    title="UMAP visualisation"
                />
            </div>

            <p className="mb-4 text-lg">
                The performance of each configuration was evaluated using two metrics:
            </p>

            <ul className="mb-4 text-lg list-disc pl-6">
                <li>Neighbourhood overlap, measuring how well nearest neighbours in the original feature space are preserved in the embedding.</li>
                <li>Trustworthiness, a more robust metric that quantifies how well local neighbourhood structure is preserved during dimensionality reduction.</li>
            </ul>

            <p className="mb-4 text-lg">
                Two UMAP configurations achieve near-identical performance in terms of neighbourhood preservation and trustworthiness:
            </p>
            
            <ul className="mb-4 text-lg list-disc pl-6">
                <li>Minimum distance = 0.01, Nearest neighbours = 15 (overlap = 0.541, trust = 0.954)</li>
                <li>Minimum distance = 0.1, Nearest neighbours = 5 (overlap = 0.534, trust = 0.959)</li>
            </ul>

            <p className="mb-4 text-lg">
                The differences between these configurations are minimal, suggesting a stable region of the parameter space where UMAP consistently preserves local structure.
                This indicates that the embedding is robust to small variations in hyperparameters within this range, and no single configuration is clearly superior based on quantitative metrics alone. 
            </p>

            <p className="mb-4 text-lg">
                For subsequent analysis, we select min_dist = 0.01 and n_neighbors = 15 as the final configuration, as it provides a slightly more structured and visually interpretable clustering of player roles while maintaining strong preservation metrics.
            </p>

            <p className="mb-4 text-lg">
                Again the interpretation of the UMAP embedding is aided by colouring according to possession score, which accurartely captures the local v gloval sctructure trade-off. At low values of min_dist and n_neighbours, the UMAP preserves local structure, 
                small clusters of similar players where possession score can vary, leading to a random gradient across the data. Whereas, for large min_dist and n_neighbour values, the UMAP captures broader trends across the data, clusters begin to merge so a smoother 
                gradient for possession score emerges.
            </p>

            <h3 className="mb-4 text-xl font-bold tracking-tight md:text-2xl">
                Evaluating Dimensionality Reduction Techniques
            </h3>

            <p className="mb-4 text-lg">
                Each dimensionality reduction technique provides a different perspective on the structure of the data. PSA captures the largest sources of global 
                variance and offers strong interpretability but does not capture the finer relationships between players, creating a less informative global view. 
                On the contrary, t-SNE achieves the highest neighbourhood preservation score, indicating a strong ability to capture local similarity, but does not 
                preserve global structure. UMAP provides a balance between local and global structure. The presence of a stable region in parameter space suggests 
                that the resulting embeddings are robust. Therefore, while t-SNE offers the strongest local separation, UMAP is selected as the most suitable method 
                for subsequent clustering, as it provides a more reliable and interpretable representation of player similarity.
            </p>

        </section>

        {/* Clustering */}
        <section className="mb-18 mx-auto max-w-6xl">
            <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-4xl">
                K-Means Clustering
            </h2>

            <p className="mb-4 text-lg">
                Having explored multiple methods for reducing the dimensionality of our feature space into two dimensions and choosing UMAP as the optimal technique,
                we now able to begin answering the central question of this project: how many distinct midfielder archetypes are there in modern football?
            </p>

            <p className="mb-4 text-lg">
                To achieve this, we used K-means clustering, which groups data points into a fixed number of clusters based on their similarity. In our case, clustering 
                was performed in the original 5-dimensional feature space to preserve player similarity.
            </p>
            
            <p className="mb-4 text-lg">
                The key challenge is determining the optimal number of clusters that fits the data. To decide this, we evaluated a range of K-values using:
            </p>

            <ul className="mb-4 text-lg list-disc pl-6">
                <li>The elbow method, to assess diminishing returns in cluster compactness.</li>
                <li> The silhouette Score, to measure how well-defined and separated the clusters are.</li>
            </ul>

            <p className="mb-4 text-lg">
                The resulting clusters were be visualised using the previously established UMAP, allowing us to interpret and compare the structure of player archetypes across different representations of the data. 
            </p>

            <h3 className="mb-4 text-xl font-bold tracking-tight md:text-2xl">
                Clustering Results for K = 3
            </h3>
            
            <div className="mx-auto mb-4 max-w-6xl">
                <iframe
                    src="/plots/midfielder-archetypes/k_3_clustering.html"
                    className="h-[700px] w-full border-0"
                    title="K = 3 clustering visualisation"
                />
            </div>  

            <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-white">
                <table className="w-full text-left">
                    <thead className="border-b border-white/10">
                        <tr>
                            <th className="px-6 py-4 text-md font-bold text-gray-400">
                                Metric
                            </th>
                            <th className="px-6 py-4 text-center text-md font-bold text-gray-400">
                                Cluster 1
                            </th>
                            <th className="px-6 py-4 text-center text-md font-bold text-gray-400">
                                Cluster 2
                            </th>
                            <th className="px-6 py-4 text-center text-md font-bold text-gray-400">
                                Cluster 3
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-white/10">

                        <tr>
                            <td className="px-6 py-4 font-medium">Progression</td>
                            <td className="bg-white/15 px-6 py-4 text-center">+0.60</td>
                            <td className="bg-red-500/15 px-6 py-4 text-center">-0.38</td>
                            <td className="bg-white/10 px-6 py-4 text-center">+0.41</td>
                        </tr>

                        <tr>
                            <td className="px-6 py-4 font-medium">Creativity</td>
                            <td className="bg-white/15 px-6 py-4 text-center">+0.65</td>
                            <td className="bg-red-500/20 px-6 py-4 text-center">-0.47</td>
                            <td className="bg-white/15 px-6 py-4 text-center">+0.58</td>
                        </tr>

                        <tr>
                            <td className="px-6 py-4 font-medium">Defensive</td>
                            <td className="bg-red-500/10 px-6 py-4 text-center">-0.19</td>
                            <td className="bg-white/10 px-6 py-4 text-center">+0.26</td>
                            <td className="bg-red-500/20 px-6 py-4 text-center">-0.47</td>
                        </tr>

                        <tr>
                            <td className="px-6 py-4 font-medium">Goal Threat</td>
                            <td className="bg-red-500/10 px-6 py-4 text-center">-0.16</td>
                            <td className="bg-red-500/15 px-6 py-4 text-center">-0.38</td>
                            <td className="bg-white/30 px-6 py-4 text-center">+1.06</td>
                        </tr>

                        <tr>
                            <td className="px-6 py-4 font-medium">Possession</td>
                            <td className="bg-white/30 px-6 py-4 text-center">+0.97</td>
                            <td className="bg-red-500/10 px-6 py-4 text-center">-0.23</td>
                            <td className="bg-red-500/10 px-6 py-4 text-center">-0.28</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <p className="mb-4 mt-2 text-sm text-gray-400 text-center">
                Table 1: Shows the average Z-scores for each of the five categories for k = 3.
            </p>

            <p className="mb-4 text-lg">
                Clustering players into three groups to reflect the traditional midfield taxonomy (CMs, CDMs and CAMs), reveals several limitations of this over-simplified view:
            </p>

            <ul className="mb-4 text-lg list-disc pl-6">
                <li><span className="font-bold">Cluster 0:</span> This group is characterised by high possession, 
                progression and creativity scores and could be broadly interpreted as the central midfielders. 
                However, it combines fundamentally different profiles, such as Luka Modrić, a ball-dominant controller, 
                and more defensively oriented midfielders such as Nemanja Matić, whose primary focus is to break up play 
                and circulate possession. Despite sharing a positional label, their on-pitch functions differ significantly.</li>
                <li><span className="font-bold">Cluster 1:</span> This group classifies all players with good a good defensive 
                score together, and would be typically associated with the defensive midfielders. However, it groups together 
                profiles like Kobbie Mainoo, an all-action midfielder, highly involved in both defensive actions and progression, 
                and Martín Zubimendi, who operates more as a deep-lying playmaker. This, once again, highlights a mixture of roles 
                within a single cluster that the traditional CDM label fails to distinguish.</li>
                <li><span className="font-bold"> Cluster 2:</span> This group is defined by very high goal threat and strong creativity, 
                and could be associated with the attacking midfielders. However, it includes both the creative attacking focal point such 
                as James Madison and more physically dominant, goal-oriented midfielders like Scott McTominay, whose contributions are 
                driven more by box presence rather than chance creation.</li>    
            </ul>

            <p className="mb-4 text-lg">
                Overall, there is substantial variation within each cluster, demonstrating that the traditional CDM–CM–CAM classification is 
                insufficient to capture the diversity of modern midfield roles. Therefore, we will now seek to identify the optimal k-value to 
                describe the data. 
            </p>
        
        </section>

        {/* Selecting K*/}
        <section className="mb-18 mx-auto max-w-6xl">
            <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-4xl">
                Final Selection of K
            </h2>

            <h3 className="mb-4 text-xl font-bold tracking-tight md:text-2xl">
                The Elbow Method
            </h3>

            <p className = "mb-4 text-lg">
                Inertia measures the sum of squared distances from each point to its cluster centre, i.e. a measure of how tightly grouped clusters are. 
                A high inertia indicates poor grouping as points are far from their cluster centres, while low inertia indicates tight clusters, with points 
                close to their cluster centres. Intuatively, inertia decreases as K increases beacuse more clusters means they become smaller, so are 
                naturally more tightly grouped. Therefore, the K-value with the lowest inertia is not necessarily the optimal choice. Instead, we looked for the 'elbow', 
                the point where adding more clusters stops improving inertia significantly.
            </p>

            <h3 className="mb-4 text-xl font-bold tracking-tight md:text-2xl">
                The Silhouette Score
            </h3>

            <p className="mb-4 text-lg">
                The silhouette score measures if a player is closer to their own cluster than to any other clusters. 
                A silhouette score of 1 indicates well separated clusters, while a score of 0 indicates bad clustering.
            </p>

            <div className="mx-auto mt-10 mb-12 max-w-5xl">
                <img
                    src="/plots/midfielder-archetypes/elbow_silhouette.png"
                    alt="Elbow method and silhouette score plots"
                    className="w-full"
                />
            </div>

            <p className="mb-4 text-lg">
                Based on the combined analysis of inertia and silhouette score, there is no standout optimal value of K. Instead, the results suggest a weak but consistent clustering within the data.
            </p>

            <p className="mb-4 text-lg">
                The inertia curve shows a steady decrease with k, where the rate of improvement slightly diminishes after k = 5 and again after k = 7, indicating diminishing returns in cluster compactness. 
            </p>

            <p className="mb-4 text-lg">
                The silhouette score peaks at k = 2, but this is an oversimplification and not a meaning result in the context of defining midfielder archetypes in football. There is a local maxima at k = 5, beyond which the silhoeutte score becomes relatively stable in a low range (0.17-0.19), indicating weak cluster separation. This suggests that while some clusetering sturcture exists, it is not well defined, which is a refelction of how different player archetypes exist on a continuum and each share specific traits. 
            </p>

            <p className="mb-4 text-lg">
                Given the absence of a single distinct optimal k-value, a stability analysis is conducted over k = 5, 6, and 7, corresponding to a region of diminishing returns in inertia, relatively stable silhouette scores, and strong football interpretability.
            </p>
        </section>

        
        {/*Results*/}
        <section className="mb-18 mx-auto max-w-6xl">
            <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-4xl">
                Clustering Results 
            </h2>

            <iframe 
                src="/plots/midfielder-archetypes/5_clustering.html"
                className="mb-4 h-[525px] w-full border-0"
                title="K=5 Clustering"
            />

            <div className="mx-auto mb-4 max-w-5xl overflow-hidden rounded-xl border border-white">
                <table className="w-full text-left">
                    <thead className="border-b border-white/10 font-bold text-md text-gray-400">
                    <tr>
                        <th className="px-6 py-4">
                        Metric
                        </th>

                        <th className="px-6 py-4 text-center ">
                        Cluster 0
                        </th>

                        <th className="px-6 py-4 text-center">
                        Cluster 1
                        </th>

                        <th className="px-6 py-4 text-center">
                        Cluster 2
                        </th>

                        <th className="px-6 py-4 text-center">
                        Cluster 3
                        </th>

                        <th className="px-6 py-4 text-center">
                        Cluster 4
                        </th>
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-white/10">

                    <tr>
                        <td className="px-6 py-4 font-medium">Progression</td>
                        <td className="bg-red-500/10 px-6 py-4 text-center">-0.25</td>
                        <td className="bg-red-500/20 px-6 py-4 text-center">-0.46</td>
                        <td className="bg-white/10 px-6 py-4 text-center">+0.33</td>
                        <td className="bg-white/30 px-6 py-4 text-center">+1.23</td>
                        <td className="bg-white/10 px-6 py-4 text-center">+0.28</td>
                    </tr>

                    <tr>
                        <td className="px-6 py-4 font-medium">Creativity</td>
                        <td className="bg-red-500/10 px-6 py-4 text-center">-0.18</td>
                        <td className="bg-red-500/30 px-6 py-4 text-center">-0.60</td>
                        <td className="bg-white/15 px-6 py-4 text-center">+0.57</td>
                        <td className="bg-white/40 px-6 py-4 text-center">+1.73</td>
                        <td className="bg-white/5 px-6 py-4 text-center">+0.05</td>
                    </tr>

                    <tr>
                        <td className="px-6 py-4 font-medium">Defensive</td>
                        <td className="px-6 py-4 text-center">-0.02</td>
                        <td className="bg-white/10 px-6 py-4 text-center">+0.31</td>
                        <td className="bg-red-500/20 px-6 py-4 text-center">-0.44</td>
                        <td className="bg-red-500/20 px-6 py-4 text-center">-0.41</td>
                        <td className="px-6 py-4 text-center">-0.01</td>
                    </tr>

                    <tr>
                        <td className="px-6 py-4 font-medium">Goal Threat</td>
                        <td className="bg-white/30 px-6 py-4 text-center">+1.25</td>
                        <td className="bg-red-500/25 px-6 py-4 text-center">-0.51</td>
                        <td className="bg-white/5 px-6 py-4 text-center">+0.20</td>
                        <td className="bg-white/25 px-6 py-4 text-center">+0.98</td>
                        <td className="bg-red-500/15 px-6 py-4 text-center">-0.37</td>
                    </tr>

                    <tr>
                        <td className="px-6 py-4 font-medium">Possession</td>
                        <td className="bg-red-500/20 px-6 py-4 text-center">-0.49</td>
                        <td className="bg-red-500/10 px-6 py-4 text-center">-0.25</td>
                        <td className="bg-red-500/15 px-6 py-4 text-center">-0.35</td>
                        <td className="bg-white/25 px-6 py-4 text-center">+0.97</td>
                        <td className="bg-white/20 px-6 py-4 text-center">+0.90</td>
                    </tr>

                    </tbody>
                </table>
            </div>

            <p className="mb-4 text-sm text-gray-400 text-center">
                Table 2.1: Shows the average Z-scores for each of the five categories for k = 5 clusters.
            </p>

            <iframe 
                src="/plots/midfielder-archetypes/6_clustering.html"
                className="mb-4 mt-12 h-[525px] w-full border-0"
                title="K=6 Clustering"
            />

            <div className="mx-auto mb-4 max-w-5xl overflow-hidden rounded-xl border border-white">
                <table className="w-full text-left">
                    <thead className="border-b border-white/10 font-bold text-md text-gray-400">
                        <tr>
                            <th className="px-6 py-4">
                                Metric
                            </th>

                            <th className="px-6 py-4 text-center">
                                Cluster 0
                            </th>

                            <th className="px-6 py-4 text-center">
                                Cluster 1
                            </th>

                            <th className="px-6 py-4 text-center">
                                Cluster 2
                            </th>

                            <th className="px-6 py-4 text-center">
                                Cluster 3
                            </th>

                            <th className="px-6 py-4 text-center">
                                Cluster 4
                            </th>

                            <th className="px-6 py-4 text-center">
                                Cluster 5
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-white/10">

                        <tr>
                            <td className="px-6 py-4 font-medium">Progression</td>
                            <td className="bg-red-500/10 px-6 py-4 text-center">-0.21</td>
                            <td className="bg-red-500/20 px-6 py-4 text-center">-0.53</td>
                            <td className="bg-white/10 px-6 py-4 text-center">+0.33</td>
                            <td className="bg-white/40 px-6 py-4 text-center">+1.60</td>
                            <td className="bg-white/20 px-6 py-4 text-center">+0.74</td>
                            <td className="bg-white/5 px-6 py-4 text-center">+0.02</td>
                        </tr>

                        <tr>
                            <td className="px-6 py-4 font-medium">Creativity</td>
                            <td className="bg-red-500/5 px-6 py-4 text-center">-0.07</td>
                            <td className="bg-red-500/25 px-6 py-4 text-center">-0.66</td>
                            <td className="bg-white/15 px-6 py-4 text-center">+0.64</td>
                            <td className="bg-white/50 px-6 py-4 text-center">+2.14</td>
                            <td className="bg-white/15 px-6 py-4 text-center">+0.58</td>
                            <td className="bg-red-500/10 px-6 py-4 text-center">-0.21</td>
                        </tr>

                        <tr>
                            <td className="px-6 py-4 font-medium">Defensive</td>
                            <td className="px-6 py-4 text-center">-0.01</td>
                            <td className="bg-white/10 px-6 py-4 text-center">+0.27</td>
                            <td className="bg-red-500/20 px-6 py-4 text-center">-0.45</td>
                            <td className="bg-red-500/25 px-6 py-4 text-center">-0.61</td>
                            <td className="bg-red-500/5 px-6 py-4 text-center">-0.07</td>
                            <td className="bg-white/10 px-6 py-4 text-center">+0.17</td>
                        </tr>

                        <tr>
                            <td className="px-6 py-4 font-medium">Goal Threat</td>
                            <td className="bg-white/30 px-6 py-4 text-center">+1.30</td>
                            <td className="bg-red-500/20 px-6 py-4 text-center">-0.53</td>
                            <td className="bg-white/5 px-6 py-4 text-center">+0.23</td>
                            <td className="bg-white/25 px-6 py-4 text-center">+0.96</td>
                            <td className="bg-white/5 px-6 py-4 text-center">+0.23</td>
                            <td className="bg-red-500/20 px-6 py-4 text-center">-0.46</td>
                        </tr>

                        <tr>
                            <td className="px-6 py-4 font-medium">Possession</td>
                            <td className="bg-red-500/15 px-6 py-4 text-center">-0.41</td>
                            <td className="bg-red-500/15 px-6 py-4 text-center">-0.40</td>
                            <td className="bg-red-500/15 px-6 py-4 text-center">-0.35</td>
                            <td className="bg-white/25 px-6 py-4 text-center">+0.88</td>
                            <td className="bg-white/35 px-6 py-4 text-center">+1.43</td>
                            <td className="bg-white/15 px-6 py-4 text-center">+0.50</td>
                        </tr>

                        

                    </tbody>
                </table>
            </div>
             
            <p className="mb-4 text-sm text-gray-400 text-center">
                Table 2.2: Shows the average Z-scores for each of the five categories for k = 6 clusters.
            </p>

            <iframe 
                src="/plots/midfielder-archetypes/7_clustering.html"
                className="mb-4 mt-12 h-[525px] w-full border-0"
                title="K=6 Clustering"
            />

            <div className="mx-auto mb-4 max-w-5xl overflow-hidden rounded-xl border border-white">
                <table className="w-full text-left">
                    <thead className="border-b border-white/10 font-bold text-md text-gray-400">
                        <tr>
                            <th className="px-6 py-4">Metric</th>
                            <th className="px-6 py-4 text-center">Cluster 0</th>
                            <th className="px-6 py-4 text-center">Cluster 1</th>
                            <th className="px-6 py-4 text-center">Cluster 2</th>
                            <th className="px-6 py-4 text-center">Cluster 3</th>
                            <th className="px-6 py-4 text-center">Cluster 4</th>
                            <th className="px-6 py-4 text-center">Cluster 5</th>
                            <th className="px-6 py-4 text-center">Cluster 6</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-white/10">

                        <tr>
                            <td className="px-6 py-4 font-medium">Progression</td>
                            <td className="bg-red-500/10 px-6 py-4 text-center">-0.22</td>
                            <td className="bg-red-500/15 px-6 py-4 text-center">-0.34</td>
                            <td className="bg-white/10 px-6 py-4 text-center">+0.44</td>
                            <td className="bg-white/40 px-6 py-4 text-center">+1.63</td>
                            <td className="bg-white/20 px-6 py-4 text-center">+0.68</td>
                            <td className="bg-white/5 px-6 py-4 text-center">+0.17</td>
                            <td className="bg-red-500/20 px-6 py-4 text-center">-0.50</td>
                        </tr>

                        <tr>
                            <td className="px-6 py-4 font-medium">Creativity</td>
                            <td className="bg-red-500/5 px-6 py-4 text-center">-0.15</td>
                            <td className="bg-red-500/20 px-6 py-4 text-center">-0.48</td>
                            <td className="bg-white/20 px-6 py-4 text-center">+0.78</td>
                            <td className="bg-white/50 px-6 py-4 text-center">+2.20</td>
                            <td className="bg-white/20 px-6 py-4 text-center">+0.73</td>
                            <td className="px-6 py-4 text-center">-0.07</td>
                            <td className="bg-red-500/25 px-6 py-4 text-center">-0.61</td>
                        </tr>

                        <tr>
                            <td className="px-6 py-4 font-medium">Defensive</td>
                            <td className="bg-red-500/10 px-6 py-4 text-center">-0.16</td>
                            <td className="bg-white/30 px-6 py-4 text-center">+0.82</td>
                            <td className="bg-red-500/20 px-6 py-4 text-center">-0.43</td>
                            <td className="bg-red-500/25 px-6 py-4 text-center">-0.55</td>
                            <td className="px-6 py-4 text-center">+0.02</td>
                            <td className="bg-red-500/10 px-6 py-4 text-center">-0.13</td>
                            <td className="bg-red-500/10 px-6 py-4 text-center">-0.18</td>
                        </tr>

                        <tr>
                            <td className="px-6 py-4 font-medium">Goal Threat</td>
                            <td className="bg-white/30 px-6 py-4 text-center">+1.34</td>
                            <td className="bg-red-500/15 px-6 py-4 text-center">-0.35</td>
                            <td className="bg-white/10 px-6 py-4 text-center">+0.39</td>
                            <td className="bg-white/25 px-6 py-4 text-center">+0.90</td>
                            <td className="bg-white/5 px-6 py-4 text-center">+0.25</td>
                            <td className="bg-red-500/15 px-6 py-4 text-center">-0.44</td>
                            <td className="bg-red-500/20 px-6 py-4 text-center">-0.53</td>
                        </tr>

                        <tr>
                            <td className="px-6 py-4 font-medium">Possession</td>
                            <td className="bg-red-500/20 px-6 py-4 text-center">-0.52</td>
                            <td className="px-6 py-4 text-center">-0.13</td>
                            <td className="bg-red-500/10 px-6 py-4 text-center">-0.30</td>
                            <td className="bg-white/25 px-6 py-4 text-center">+0.95</td>
                            <td className="bg-white/40 px-6 py-4 text-center ">+1.62</td>
                            <td className="bg-white/15 px-6 py-4 text-center">+0.63</td>
                            <td className="bg-red-500/15 px-6 py-4 text-center">-0.41</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <p className="mb-4 text-sm text-gray-400 text-center">
                Table 2.3: Shows the average Z-scores for each of the five categories for k = 7 clusters.
            </p>
        </section>

        {/*Analysis*/}
        <section className="mb-18 mx-auto max-w-6xl">

            <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-4xl">
                Analysis
            </h2>

            <p className="mb-6 text-lg">
                Beginning with <strong>k = 5</strong>, the following distinct archetypes emerge:
            </p>

            <ul className="mb-8 space-y-6 pl-6">

                <li className="text-lg">
                <strong>Cluster 0 - Box Crashers</strong> - This cluster is characterised by a very high
                Goal Threat score (1.25) and below-average scores in all other categories. This suggests
                players whose primary contribution comes in advanced attacking situations, particularly
                through late runs into the box or by occupying dangerous positions. As a result, this group
                includes both physically dominant players who attack aerial balls (e.g. Scott McTominay and
                Mikel Merino) and more technical players who find space in the box (e.g. Curtis Jones).
                This highlights that similar statistical outputs can arise from different underlying
                playstyles.
                </li>

                <li className="text-lg">
                <strong>Cluster 1 - Anchors</strong> - This cluster is defined by the only above-average
                Defensive score (0.31), so broadly captures deeper-lying players with high defensive
                involvement, from aerially dominant players to excellent 1v1 defenders. Since this is the
                only cluster that encompasses the defensive score, there is considerable variation in the
                profiles observed. For example, players like Amadou Onana combine defensive strength with
                physical goal threat, while others such as Zubimendi contribute more in build-up. This
                suggests that defensive contribution alone is not sufficient to fully distinguish midfield
                roles.
                </li>

                <li className="text-lg">
                <strong>Cluster 2 - Progressive Creators</strong> - This cluster combines good Creativity
                (0.57) and Progression (0.33) with relatively low Possession involvement (-0.35). These
                players appear to operate as dynamic, risk-taking midfielders who drive play forward and
                attempt to create chances, rather than controlling tempo. Their lower Possession score may
                reflect a tendency to attempt higher-risk actions, resulting in less stable ball retention.
                This profile aligns with modern &ldquo;advanced 8s&rdquo; or secondary creators, such as
                Bruno Guimarães and Adam Wharton.
                </li>

                <li className="text-lg">
                <strong>Cluster 3 - Elite Players</strong> - This cluster exhibits elite levels of play
                across all attacking categories. Rather than representing a single tactical role, this group
                appears to capture the most influential attacking midfielders in the dataset. The presence
                of players such as James Maddison and Pedri illustrates this: while both are highly
                effective, their stylistic roles differ significantly. This suggests that the cluster may
                be separating overall quality and influence rather than a clearly defined positional
                archetype.
                </li>

                <li className="text-lg">
                <strong>Cluster 4 - Deep-Lying Playmakers</strong> - This cluster is defined by an
                excellent Possession score (0.90), representing players who are heavily involved in ball
                circulation and build-up play. These midfielders are likely responsible for maintaining
                possession and controlling tempo, often operating deeper on the pitch. However, variation
                still exists within the cluster: while players like Frenkie de Jong exemplify a classic
                deep-lying playmaker, others such as Eduardo Camavinga combine this with greater physicality
                and dynamism. This again highlights the fluidity of modern midfield roles.
                </li>

            </ul>

            <p className="mb-8 text-lg">
                Overall, the <strong>k = 5</strong> clustering reveals several intuitive midfielder
                archetypes, including attacking playmakers, defensive specialists, and possession-focused
                players. However, significant variation exists within each group, and in some cases
                (notably Cluster 3), the model appears to separate players based on overall quality and
                influence rather than strictly defined roles. This demonstrates that traditional positional
                labels (CMs, CDMs, CAMs) are insufficient to fully describe the diversity of modern midfield
                profiles.
            </p>

            <p className="mb-6 text-lg">
                Moving to <strong>k = 6</strong>, the overall structure of the clustering remains largely
                consistent with <strong>k = 5</strong>. Clusters 0, 1 and 2 remain relatively stable, still
                identifiable as the Box Crashers, Anchors and Progressive Creators. The largest change at
                <strong> k = 6</strong> is the refinement of the possession-based roles, rather than the
                emergence of entirely new archetypes.
            </p>

            <ul className="mb-8 space-y-6 pl-6">

                <li className="text-lg">
                <strong>Cluster 3 - Playmakers</strong> - While this cluster continues to capture the most
                elite players, it becomes more extreme, particularly in Progression (1.23 to 1.60) and
                Creativity (1.73 to 2.14), so we can roughly define this cluster as the Playmakers.
                Despite their statistical separation, there is still considerable variation in profiles
                within this cluster (e.g. Pedri and Maddison). This reinforces the idea that the model still
                struggles to differentiate between quality and tactical role.
                </li>

                <li className="text-lg">
                <strong>Cluster 4 - Controllers</strong> - A new cluster that emerged from the Elite
                Attacking Playmakers, defined by an elite Possession score (1.43). These players are heavily
                involved in dictating tempo and controlling build-up play. The grouping of players such as
                İlkay Gündoğan, Vitinha and Frenkie de Jong reflects a more coherent and intuitive archetype
                of high-level midfield controllers.
                </li>

                <li className="text-lg">
                <strong>Cluster 5 - Supporting Midfielders</strong> - This cluster largely emerges from the
                previous Deep-Lying Playmakers at <strong>k = 5</strong>, separated from what can now be
                seen as the elite Controllers in Cluster 4. While still above average in Possession (0.51),
                these players contribute less in Progression (0.02) and Creativity (-0.21), but show higher
                defensive involvement (0.17). This suggests a role focused on maintaining structure and
                supporting play rather than controlling it. A good example of this is the reclassification
                of Eduardo Camavinga into this cluster, which aligns with the intuitive sense of his
                previously discussed misidentification at <strong>k = 5</strong>.
                </li>

            </ul>

            <p className="mb-8 text-lg">
                Overall, the transition to <strong>k = 6</strong> does not introduce fundamentally new
                midfielder roles, but instead provides greater granularity within existing archetypes,
                particularly by separating high-level Controllers from more supportive possession players.
                However, the issues observed at <strong>k = 5</strong> remain: certain clusters, particularly
                Cluster 3, appear to reflect player quality and influence rather than distinct tactical roles,
                alongside high variation in player profiles within clusters. This indicates that while
                increasing <em>k</em> improves detail, it does not fully resolve the overlap between role and
                quality within the dataset.
            </p>

            <p className="mb-6 text-lg">
                At <strong>k = 7</strong>, once again the overall structure of the clustering remains
                consistent, with no fundamentally new archetypes emerging. As expected, the additional cluster
                leads to further fragmentation of existing archetypes, the most notable of which is the
                emergence of a distinctive defensive specialist cluster.
            </p>

            <ul className="mb-8 space-y-6 pl-6">

                <li className="text-lg">
                <strong>Cluster 1 - Ball-Winners</strong> - Compared to <strong>k = 5</strong> and
                <strong> k = 6</strong>, this cluster now provides a much cleaner identification of players
                whose primary role is to break up play and win duels, as reflected in the elite Defensive
                score (0.82). However, while this cluster isolates elite defensive contributors more
                effectively, there remains variation in secondary attributes (e.g. Zubimendi vs Onana), just
                as there was at <strong>k = 5</strong> and <strong>k = 6</strong>.
                </li>

                <li className="text-lg">
                <strong>Cluster 4 - Controllers</strong> - This cluster represents a refinement of the
                Controllers identified at <strong>k = 6</strong>, with an even more extreme Possession score
                (1.62). It continues to group the likes of Vitinha and Frenkie de Jong, meaning the less
                involved creators have been split into a separate cluster.
                </li>

                <li className="text-lg">
                <strong>Cluster 5 - Recyclers</strong> - Similar to the Supporting Midfielders archetype at
                <strong> k = 6</strong>, this cluster is characterised by solid Possession involvement
                (0.63), but limited contribution in other areas, alongside slightly reduced defensive
                activity (-0.13). This profile aligns with players who prioritise safe ball circulation
                and structural stability, rather than directly influencing attacking play, such as Marc
                Casadó.
                </li>

                <li className="text-lg">
                <strong>Cluster 6 - Low-Impact Players</strong> - This cluster is defined by below-average
                scores across all categories, suggesting players with relatively low statistical involvement
                within their teams. Unlike other clusters, this does not represent a clear tactical
                archetype, but rather a residual grouping resulting from increased model complexity.
                Alongside the Attacking Playmakers (Cluster 3), this further highlights that the model is
                partially capturing quality rather than purely distinct player roles.
                </li>

            </ul>

            <p className="mb-8 text-lg">
                Overall, increasing to <strong>k = 7</strong> provides limited additional insight compared
                to <strong>k = 6</strong>. While it does separate the elite defensive players, it introduces
                a residual cluster of low-involvement players that lacks tactical meaning. This suggests that
                the added complexity does not meaningfully enhance the interpretability of the clustering and
                instead reinforces the limitation that the model struggles to fully separate player role from
                overall influence.
            </p>

        </section>
        

        {/*Evaluation*/}
        <section className="mb-18 mx-auto max-w-6xl">

            <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-4xl">
                Evaluation
            </h2>

            <h3 className="mb-6 text-xl font-bold tracking-tight md:text-2xl">
                Standard Deviations
            </h3>

            <div className="mx-auto mb-4 max-w-2xl overflow-hidden rounded-xl border border-white">
                <table className="w-full text-left">
                    <thead className="border-b border-white/10 font-bold text-md text-gray-400">
                        <tr>
                            <th className="px-6 py-4">Metric</th>
                            <th className="px-6 py-4 text-center">k = 3</th>
                            <th className="px-6 py-4 text-center">k = 5</th>
                            <th className="px-6 py-4 text-center">k = 6</th>
                            <th className="px-6 py-4 text-center">k = 7</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-white/10">
                        <tr>
                            <td className="px-6 py-4 font-medium">Progression</td>
                            <td className="px-6 py-4 text-center">0.52</td>
                            <td className="px-6 py-4 text-center">0.65</td>
                            <td className="px-6 py-4 text-center">0.76</td>
                            <td className="px-6 py-4 text-center">0.74</td>
                        </tr>

                        <tr>
                            <td className="px-6 py-4 font-medium">Creativity</td>
                            <td className="px-6 py-4 text-center">0.63</td>
                            <td className="px-6 py-4 text-center">0.90</td>
                            <td className="px-6 py-4 text-center">0.98</td>
                            <td className="px-6 py-4 text-center">0.98</td>
                        </tr>

                        <tr>
                            <td className="px-6 py-4 font-medium">Defensive</td>
                            <td className="px-6 py-4 text-center">0.37</td>
                            <td className="px-6 py-4 text-center">0.31</td>
                            <td className="px-6 py-4 text-center">0.35</td>
                            <td className="px-6 py-4 text-center">0.44</td>
                        </tr>

                        <tr>
                            <td className="px-6 py-4 font-medium">Goal Threat</td>
                            <td className="px-6 py-4 text-center">0.78</td>
                            <td className="px-6 py-4 text-center">0.79</td>
                            <td className="px-6 py-4 text-center">0.74</td>
                            <td className="px-6 py-4 text-center">0.72</td>
                        </tr>

                        <tr>
                            <td className="px-6 py-4 font-medium">Possession</td>
                            <td className="px-6 py-4 text-center">0.71</td>
                            <td className="px-6 py-4 text-center">0.72</td>
                            <td className="px-6 py-4 text-center">0.78</td>
                            <td className="px-6 py-4 text-center">0.81</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="mb-4 text-sm text-gray-400 text-center">
                Table 3: Shows the standard deviation in the mean category score for all clustering results.
            </p>

            <p className="mb-6 text-lg">
                To quantify how well differentiated the clusters were at each level, we calculated the
                mean score for each of the five feature categories within each cluster and then calculate
                the standard deviation across the cluster means, as seen above. A high standard deviation
                for a particular category, such as Progression, indicates greater variation between the
                cluster means and therefore stronger differentiation in that aspect of midfield play. A low
                standard deviation suggests that the cluster means are more similar, indicating less
                differentiation between clusters in that category. We can use this measure to support our
                evaluation of each <em>k</em>-value.
            </p>

            <p className="mb-6 text-lg">
                At <strong>k = 3</strong>, the clusters broadly resemble the traditional roles of Central
                Midfielders, Defensive Midfielders and Attacking Midfielders, but demonstrate significant
                overlap and a lack of granularity. This is supported by relatively low variation in
                Progression (0.52), Creativity (0.63) and Defensive Contribution (0.37), demonstrating
                that the three-role model does not produce strongly differentiated profiles across these
                dimensions.
            </p>

            <p className="mb-6 text-lg">
                At <strong>k = 5</strong>, there is clear improvement. Variation increases across key
                dimensions, particularly Progression (0.65) and Creativity (0.90), leading to five distinct
                and interpretable archetypes: Box Crashers, Anchors, Progressive Creators, Elite Players
                and Deep-Lying Playmakers. However, all players with a strong defensive score are grouped
                into one broad cluster, encompassing players with vastly differing profiles. Another issue
                that arises is that the model struggles to differentiate quality from tactical role. This
                is seen in Cluster 3, the Elite Players, who have far above-average scores across all
                metrics, but comprise a set of players with varying tactical roles.
            </p>

            <p className="mb-6 text-lg">
                At <strong>k = 6</strong>, the introduction of the extra cluster helps to further
                differentiate the possession-based roles, with variation increasing significantly across
                Progression (0.76), Creativity (0.98) and Possession (0.78). The primary improvement comes
                from the separation of the highly influential Controllers from the secondary Supporting
                Midfielders. This provides a more nuanced view of midfield roles, but still shares the same
                limitations as <strong>k = 5</strong>, with defensively dominant midfielders grouped together
                and an even more extreme separation of the elite players, who are now redefined as the
                Playmakers.
            </p>

            <p className="mb-6 text-lg">
                At <strong>k = 7</strong>, although defensive specialists are more clearly isolated
                (Defensive variation = 0.44), the clustering becomes more fragmented. The introduction of
                the Low-Impact Players, defined by below-average scores across all categories, does not
                represent a meaningful tactical role, but rather reflects differences in overall player
                influence. This highlights a key limitation of the model: its tendency to partially capture
                player quality alongside tactical role.
            </p>

        </section>

        <section className="mb-4 mx-auto max-w-6xl">

            <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-4xl">
                Conclusion
            </h2>

            <p className="mb-6 text-lg">
                The purpose of this analysis was to evaluate whether the traditional classification of
                midfielders into three roles (CMs, CDMs and CAMs) is sufficient to effectively describe
                roles within the modern game. Using K-Means clustering, we aimed to identify how many
                distinct player archetypes emerge from the data. While no single &ldquo;perfect&rdquo;
                value of <em>k</em> exists, we evaluated <em>k = 5</em>, <em>k = 6</em> and
                <em> k = 7</em> using both statistical measures and footballing interpretation.
            </p>

            <p className="mb-6 text-lg">
                Overall, <strong>k = 6</strong> provided the best balance between statistical separation
                and interpretability. It captures meaningful distinctions between player roles,
                particularly within possession-based midfielders, while avoiding the fragmentation and
                reduced clarity observed at <strong>k = 7</strong>.
            </p>

            <p className="mb-4 text-lg">
                This led to the identification of six key midfielder archetypes:
            </p>

            <ul className="mb-8 list-disc space-y-2 pl-6 text-lg">
                <li>Box Crashers</li>
                <li>Anchors</li>
                <li>Progressive Creators</li>
                <li>Playmakers</li>
                <li>Controllers</li>
                <li>Supporting Midfielders</li>
            </ul>

            <p className="mb-6 text-lg">
                While this six-role framework provides a more detailed view than the traditional
                three-role model, it remains an oversimplification of reality. This is partly due to
                the way modern football is played: a midfielder does not have one task that they
                consistently perform. Modern midfielders do not operate within fixed roles; instead,
                their responsibilities are fluid and context-dependent. A single player may perform
                multiple functions within a match, adapting to the game state, team structure and
                tactical demands.
            </p>

            <p className="mb-6 text-lg">
                As a result, player archetypes should not be viewed as rigid classifications, but
                rather as overlapping profiles within a continuous spectrum of roles. This helps explain
                why, even with increased model complexity, some degree of overlap between clusters
                remains unavoidable. Rather than providing definitive labels for every midfielder,
                the clustering framework is therefore better viewed as a way of identifying the
                underlying dimensions and common profiles that characterise modern midfield play.
            </p>

        </section>

        {/*Github*/}
        <div className="mb-12 flex gap-6 justify-center">
            <a
                href="https://github.com/sethmckinnonevans/midfielder-archetype-analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 px-6 py-3 transition duration-200 hover:border-white hover:bg-white/10 hover:scale-110"
            >
                View on GitHub
            </a>
        </div>    

        <div className="mb-12 border-t border-white/20">
        </div>
        
        {/* Other Projects */}
        <section className="mb-12 mx-auto max-w-6xl">
            
            <div className="grid gap-12 md:grid-cols-3">

                <div className="md:col-span-2">
                
                    <h3 className="mb-8 text-2xl font-bold tracking-tight md:text-4xl">
                        Featured Projects
                    </h3>

                    <div className="grid gap-10 md:grid-cols-3">

                        <Link
                        href="/projects/world-cup-predictor"
                        className="group rounded-2xl border border-white/30 p-8 transition-200 hover:scale-105 hover:border-white hover:bg-white/10"
                        >
                    
                            <h3 className="mb-1 text-2xl font-bold">
                            2026 World Cup Predictor
                            </h3>  
                            
                            <p className="mb-3 text-sm tracking-wide text-gray-500">
                            MACHINE LEARNING
                            </p>

                            <p className ="text-gray-400">
                            Description...
                            </p>

                        </Link>

                        <Link
                            href="/projects/premier-league-usage"
                            className="group rounded-2xl border border-white/30 p-8 transition-200 hover:scale-105 hover:border-white hover:bg-white/10"
                        >
                            <h3 className="mb-1 text-2xl font-bold">
                            Premier League Player Usage
                            </h3>

                            <p className="mb-3 text-sm tracking-wide text-gray-500">
                            DATA ANALYSIS
                            </p>

                            <p className="text-gray-400">
                            Description...
                            </p>

                        </Link>

                    </div>
                </div>
            
                <div className="flex flex-col">

                    <Link
                        href="/projects"
                        className="group"
                    >
                        <h3 className="text-3xl mb-4 font-bold tracking-tight transition duration-200 group-hover:text-gray-300 md:text-4xl">
                            All Projects
                        </h3>

                        <p className="text-gray-400">
                        Explore my collection of fotball analytics projects.
                        </p>
                    </Link>

                </div>

            </div>

    </section>

    </main>
  );
}