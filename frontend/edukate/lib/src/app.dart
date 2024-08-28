// import 'package:edukate/src/visual_programming/base.dart';
// import 'package:flutter/material.dart';
// import 'package:flutter_gen/gen_l10n/app_localizations.dart';
// import 'package:flutter_localizations/flutter_localizations.dart';

// import 'sample_feature/sample_item_details_view.dart';
// import 'sample_feature/sample_item_list_view.dart';
// import 'settings/settings_controller.dart';
// import 'settings/settings_view.dart';

// /// The Widget that configures your application.
// class MyApp extends StatelessWidget {
//   const MyApp({
//     super.key,
//     required this.settingsController,
//   });

//   final SettingsController settingsController;

//   @override
//   Widget build(BuildContext context) {
//     // Glue the SettingsController to the MaterialApp.
//     //
//     // The ListenableBuilder Widget listens to the SettingsController for changes.
//     // Whenever the user updates their settings, the MaterialApp is rebuilt.
//     return ListenableBuilder(
//       listenable: settingsController,
//       builder: (BuildContext context, Widget? child) {
//         return MaterialApp(
//           // Providing a restorationScopeId allows the Navigator built by the
//           // MaterialApp to restore the navigation stack when a user leaves and
//           // returns to the app after it has been killed while running in the
//           // background.
//           restorationScopeId: 'app',

//           // Provide the generated AppLocalizations to the MaterialApp. This
//           // allows descendant Widgets to display the correct translations
//           // depending on the user's locale.
//           localizationsDelegates: const [
//             AppLocalizations.delegate,
//             GlobalMaterialLocalizations.delegate,
//             GlobalWidgetsLocalizations.delegate,
//             GlobalCupertinoLocalizations.delegate,
//           ],
//           supportedLocales: const [
//             Locale('en', ''), // English, no country code
//           ],

//           // Use AppLocalizations to configure the correct application title
//           // depending on the user's locale.
//           //
//           // The appTitle is defined in .arb files found in the localization
//           // directory.
//           onGenerateTitle: (BuildContext context) =>
//               AppLocalizations.of(context)!.appTitle,

//           // Define a light and dark color theme. Then, read the user's
//           // preferred ThemeMode (light, dark, or system default) from the
//           // SettingsController to display the correct theme.
//           theme: ThemeData(),
//           darkTheme: ThemeData.dark(),
//           themeMode: settingsController.themeMode,

//           // Define a function to handle named routes in order to support
//           // Flutter web url navigation and deep linking.
//           onGenerateRoute: (RouteSettings routeSettings) {
//             return MaterialPageRoute<void>(
//               settings: routeSettings,
//               builder: (BuildContext context) {
//                 switch (routeSettings.name) {
//                   // case SettingsView.routeName:
//                   //   return SettingsView(controller: settingsController);
//                   // case SampleItemDetailsView.routeName:
//                   //   return const SampleItemDetailsView();
//                   // case SampleItemListView.routeName:
//                   //   return const SampleItemListView();
//                   case TwoColumnWidget.routeName:
//                   default:
//                     return const TwoColumnWidget();
//                 }
//               },
//             );
//           },
//         );
//       },
//     );
//   }
// }
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: InfiniteArea(),
    );
  }
}

class InfiniteArea extends StatefulWidget {
  @override
  _InfiniteAreaState createState() => _InfiniteAreaState();
}

class _InfiniteAreaState extends State<InfiniteArea> {
  Offset position = Offset.zero;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: GestureDetector(
        onPanUpdate: (details) {
          setState(() {
            position += details.delta;
          });
        },
        child: Stack(
          children: [
            Positioned.fill(
              child: CustomPaint(
                painter: GridPainter(
                  squareSize: 50.0,
                  offset: position,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class GridPainter extends CustomPainter {
  final double squareSize;
  final Offset offset;

  GridPainter({required this.squareSize, required this.offset});

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = Colors.grey.shade400
      ..strokeWidth = 1.0;

    // Draw vertical lines
    double startX = offset.dx % squareSize;
    for (double x = startX; x < size.width; x += squareSize) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), paint);
    }

    // Draw horizontal lines
    double startY = offset.dy % squareSize;
    for (double y = startY; y < size.height; y += squareSize) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), paint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    // Repaint only when the offset changes
    print("oldDelegate: $oldDelegate");
    return oldDelegate is GridPainter && (oldDelegate.offset != offset);
  }
}