EESchema Schematic File Version 4
LIBS:Drop-cache
EELAYER 29 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title ""
Date ""
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
Wire Wire Line
	4300 3000 4200 3000
Wire Wire Line
	7700 1850 8000 1850
$Comp
L power:GND #PWR02
U 1 1 5CA83DFA
P 3450 1700
F 0 "#PWR02" H 3450 1450 50  0001 C CNN
F 1 "GND" H 3455 1527 50  0000 C CNN
F 2 "" H 3450 1700 50  0001 C CNN
F 3 "" H 3450 1700 50  0001 C CNN
	1    3450 1700
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR04
U 1 1 5CA861D7
P 4200 3250
F 0 "#PWR04" H 4200 3000 50  0001 C CNN
F 1 "GND" H 4205 3077 50  0000 C CNN
F 2 "" H 4200 3250 50  0001 C CNN
F 3 "" H 4200 3250 50  0001 C CNN
	1    4200 3250
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR03
U 1 1 5CA875E2
P 7900 3450
F 0 "#PWR03" H 7900 3200 50  0001 C CNN
F 1 "GND" H 7905 3277 50  0000 C CNN
F 2 "" H 7900 3450 50  0001 C CNN
F 3 "" H 7900 3450 50  0001 C CNN
	1    7900 3450
	1    0    0    -1  
$EndComp
$Comp
L power:+3V3 #PWR0101
U 1 1 5CA79F76
P 3600 3300
F 0 "#PWR0101" H 3600 3150 50  0001 C CNN
F 1 "+3V3" H 3615 3473 50  0000 C CNN
F 2 "" H 3600 3300 50  0001 C CNN
F 3 "" H 3600 3300 50  0001 C CNN
	1    3600 3300
	1    0    0    -1  
$EndComp
Wire Wire Line
	8000 1850 8000 850 
Wire Wire Line
	8000 850  3450 850 
Wire Wire Line
	4200 3250 4200 3000
$Comp
L expansion-rescue:SI7201-local U2
U 1 1 5CAF52C6
P 5000 4200
F 0 "U2" H 4020 4646 50  0000 R CNN
F 1 "SI7201" H 4020 4555 50  0000 R CNN
F 2 "Package_TO_SOT_SMD:SOT-23" H 5000 4200 50  0001 C CNN
F 3 "" H 5000 4200 50  0001 C CNN
	1    5000 4200
	1    0    0    -1  
$EndComp
$Comp
L Device:C C1
U 1 1 5CAFD93C
P 2750 3800
F 0 "C1" H 2800 3900 50  0000 L CNN
F 1 "0,1uF" H 2800 3700 50  0000 L CNN
F 2 "Capacitor_SMD:C_0603_1608Metric_Pad1.05x0.95mm_HandSolder" H 2788 3650 50  0001 C CNN
F 3 "~" H 2750 3800 50  0001 C CNN
	1    2750 3800
	1    0    0    -1  
$EndComp
$Comp
L Device:Battery_Cell BT1
U 1 1 5CB03C6A
P 3600 3850
F 0 "BT1" H 3450 4000 50  0000 L CNN
F 1 "Battery_Cell" H 3150 3800 50  0000 L CNN
F 2 "footprints:CR1216_holder_mouser_bat_hld_012_smt" V 3600 3910 50  0001 C CNN
F 3 "~" V 3600 3910 50  0001 C CNN
	1    3600 3850
	1    0    0    -1  
$EndComp
Wire Wire Line
	3600 3650 3600 3500
Wire Wire Line
	3600 3950 3600 4100
Wire Wire Line
	3600 4100 4250 4100
NoConn ~ 4300 1600
NoConn ~ 4300 1700
NoConn ~ 4300 1800
NoConn ~ 4300 2200
NoConn ~ 4300 2300
NoConn ~ 4300 2400
NoConn ~ 4300 2500
NoConn ~ 4300 2600
NoConn ~ 4300 2700
NoConn ~ 4300 2800
NoConn ~ 4300 2900
NoConn ~ 5250 3250
NoConn ~ 5400 3250
NoConn ~ 5550 3250
NoConn ~ 5700 3250
NoConn ~ 6300 3250
NoConn ~ 6450 3250
NoConn ~ 7700 1950
NoConn ~ 7700 2050
NoConn ~ 7700 2150
NoConn ~ 7700 2250
NoConn ~ 7700 2350
NoConn ~ 7700 2450
NoConn ~ 7700 2550
NoConn ~ 7700 2650
NoConn ~ 7700 2750
NoConn ~ 7700 2850
Wire Wire Line
	2750 3950 2750 4100
Wire Wire Line
	2750 4100 3600 4100
Connection ~ 3600 4100
Wire Wire Line
	3450 1500 4300 1500
Wire Wire Line
	3450 850  3450 1500
Wire Wire Line
	3450 1500 3450 1700
Connection ~ 3450 1500
$Comp
L expansion-rescue:453-00005-local U1
U 1 1 5CA7DB6D
P 7650 3900
F 0 "U1" H 6000 6715 50  0000 C CNN
F 1 "453-00005" H 6000 6624 50  0000 C CNN
F 2 "footprints:453-0005" H 7650 3900 50  0001 C CNN
F 3 "" H 7650 3900 50  0001 C CNN
	1    7650 3900
	1    0    0    -1  
$EndComp
Wire Wire Line
	7900 3450 7900 3250
Wire Wire Line
	6750 3250 7450 3250
Wire Wire Line
	3600 3500 4250 3500
Wire Wire Line
	3600 3300 3600 3500
Connection ~ 3600 3500
Wire Wire Line
	3600 3500 2750 3500
Wire Wire Line
	2750 3500 2750 3650
$Comp
L power:GND #PWR05
U 1 1 5CB22D1A
P 3600 4100
F 0 "#PWR05" H 3600 3850 50  0001 C CNN
F 1 "GND" H 3605 3927 50  0000 C CNN
F 2 "" H 3600 4100 50  0001 C CNN
F 3 "" H 3600 4100 50  0001 C CNN
	1    3600 4100
	1    0    0    -1  
$EndComp
Wire Wire Line
	2700 2150 3600 2150
Wire Wire Line
	3600 2150 3600 1900
Wire Wire Line
	3600 1900 4300 1900
Wire Wire Line
	2700 2250 4200 2250
Wire Wire Line
	4200 2250 4200 2100
Wire Wire Line
	4200 2100 4300 2100
Wire Wire Line
	2700 2350 3850 2350
Wire Wire Line
	3850 2350 3850 2000
Wire Wire Line
	3850 2000 4300 2000
$Comp
L power:GND #PWR08
U 1 1 5CF6C08B
P 2700 2450
F 0 "#PWR08" H 2700 2200 50  0001 C CNN
F 1 "GND" V 2700 2250 50  0000 C CNN
F 2 "" H 2700 2450 50  0001 C CNN
F 3 "" H 2700 2450 50  0001 C CNN
	1    2700 2450
	0    -1   -1   0   
$EndComp
$Comp
L Connector:Conn_01x05_Male J1
U 1 1 5CDBD9AD
P 2500 2250
F 0 "J1" H 2500 2600 50  0000 C CNN
F 1 "Conn_01x05_Male" H 2608 2540 50  0001 C CNN
F 2 "Connector_PinHeader_1.27mm:PinHeader_1x05_P1.27mm_Vertical" H 2500 2250 50  0001 C CNN
F 3 "~" H 2500 2250 50  0001 C CNN
	1    2500 2250
	1    0    0    -1  
$EndComp
Wire Wire Line
	4650 3800 6600 3800
Wire Wire Line
	6600 3800 6600 3450
$Comp
L Device:C C2
U 1 1 5D02A0AB
P 6850 3600
F 0 "C2" H 6900 3700 50  0000 L CNN
F 1 "0,1uF" H 6900 3500 50  0000 L CNN
F 2 "Capacitor_SMD:C_0603_1608Metric_Pad1.05x0.95mm_HandSolder" H 6888 3450 50  0001 C CNN
F 3 "~" H 6850 3600 50  0001 C CNN
	1    6850 3600
	1    0    0    -1  
$EndComp
Wire Wire Line
	6850 3450 6600 3450
Connection ~ 6600 3450
Wire Wire Line
	6600 3450 6600 3250
Wire Wire Line
	6850 3750 7450 3750
Wire Wire Line
	7450 3750 7450 3250
Connection ~ 7450 3250
Wire Wire Line
	7450 3250 7900 3250
NoConn ~ 5850 3250
NoConn ~ 6000 3250
NoConn ~ 6150 3250
Wire Wire Line
	2700 2050 2950 2050
Wire Wire Line
	2950 2050 2950 1650
Wire Wire Line
	2950 1650 2400 1650
Wire Wire Line
	2400 1650 2400 4450
Wire Wire Line
	2400 4450 6600 4450
Wire Wire Line
	6600 4450 6600 3800
Connection ~ 6600 3800
$Comp
L Device:Jumper_NO_Small JP1
U 1 1 5D15D6C0
P 8150 2950
F 0 "JP1" H 8150 3135 50  0000 C CNN
F 1 "Jumper_NO_Small" H 8150 3044 50  0000 C CNN
F 2 "Jumper:SolderJumper-2_P1.3mm_Open_TrianglePad1.0x1.5mm" H 8150 2950 50  0001 C CNN
F 3 "~" H 8150 2950 50  0001 C CNN
	1    8150 2950
	1    0    0    -1  
$EndComp
Wire Wire Line
	7700 2950 8050 2950
$Comp
L power:GND #PWR0102
U 1 1 5D15EDEF
P 8250 2950
F 0 "#PWR0102" H 8250 2700 50  0001 C CNN
F 1 "GND" H 8255 2777 50  0000 C CNN
F 2 "" H 8250 2950 50  0001 C CNN
F 3 "" H 8250 2950 50  0001 C CNN
	1    8250 2950
	1    0    0    -1  
$EndComp
$EndSCHEMATC