# Component Hierarchy

**LoginFormContainer**
+ LoginForm

**NavBarContainer (every page)**
+ NavBar

**Footer (every page)**

**SplashPageContainer**
+ SplashPage
    + HeroPanel
    + FeaturePanel

<!-- ## Homepage

**HomePageContainer**
+ HomePage
    + ActivityFeedContainer
    + DashboardContainer

**ActivityFeedContainer**
+ ActivityFeed
    + ActivityFeedItem
        + CommentContainer

**CommentContainer**
+ CommentForm
+ Comments
    + Comment

**DashboardContainer**
+ Dashboard
    + DashboardStats
    + RecentRoutes
        + RecentRouteItem -->

## Creating Routes

**CreateRouteContainer**
+ CreateRoute
    + MapSidePanelContainer
    + Map

<!-- **MapSidePanelContainer**
+ MapSidePanel
    + SearchContainer
    + RouteStats

**SearchContainer**
+ Search -->

<!-- ## Finding Routes

**FindRouteContainer**
+ FindRoute
    + SearchContainer
    + Map
    + SearchResults
        + SearchResult

## Viewing Routes

**RouteDetailContainer**
+ RouteDetail
    + RouteStats
    + Map
+ CommentContainer -->

## Routes

|Path   | Component   |
|-------|-------------|
| / | SplashPageContainer |
| /sign-up | LoginFormContainer |
| /log-in | LoginFormContainer |
<!-- | /home | HomePageContainer |
| /home/activity-feed | ActivityFeedContainer |
| /home/dashboard | DashboardContainer | -->
| /create-route | CreateRouteContainer |
<!-- | /find-route | FindRouteContainer |
| /route/:routeId | RouteDetailContainer | -->
