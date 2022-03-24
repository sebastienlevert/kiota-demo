import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Businessunit, Crmbaseentity, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Usersettings extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _addressbooksyncinterval?: number | undefined;
    private _advancedfindstartupmode?: number | undefined;
    private _amdesignator?: string | undefined;
    private _autocaptureuserstatus?: number | undefined;
    private _autocreatecontactonpromote?: number | undefined;
    private _businessunitid?: string | undefined;
    private _businessunitid_businessunit?: Businessunit | undefined;
    private _calendartype?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _currencyformatcode?: number | undefined;
    private _currencysymbol?: string | undefined;
    private _datavalidationmodeforexporttoexcel?: number | undefined;
    private _dateformatcode?: number | undefined;
    private _dateformatstring?: string | undefined;
    private _dateseparator?: string | undefined;
    private _decimalsymbol?: string | undefined;
    private _defaultcalendarview?: number | undefined;
    private _defaultcountrycode?: string | undefined;
    private _defaultdashboardid?: string | undefined;
    private _defaultsearchexperience?: number | undefined;
    private _entityformmode?: number | undefined;
    private _fullnameconventioncode?: number | undefined;
    private _getstartedpanecontentenabled?: boolean | undefined;
    private _helplanguageid?: number | undefined;
    private _homepagearea?: string | undefined;
    private _homepagelayout?: string | undefined;
    private _homepagesubarea?: string | undefined;
    private _ignoreunsolicitedemail?: boolean | undefined;
    private _incomingemailfilteringmethod?: number | undefined;
    private _isappsforcrmalertdismissed?: boolean | undefined;
    private _isautodatacaptureenabled?: boolean | undefined;
    private _isdefaultcountrycodecheckenabled?: boolean | undefined;
    private _isduplicatedetectionenabledwhengoingonline?: boolean | undefined;
    private _isemailconversationviewenabled?: boolean | undefined;
    private _isguidedhelpenabled?: boolean | undefined;
    private _isresourcebookingexchangesyncenabled?: boolean | undefined;
    private _issendasallowed?: boolean | undefined;
    private _lastalertsviewedtime?: Date | undefined;
    private _lastmodifiedtimeforviewpersonalizationsettings?: Date | undefined;
    private _localeid?: number | undefined;
    private _longdateformatcode?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _negativecurrencyformatcode?: number | undefined;
    private _negativeformatcode?: number | undefined;
    private _nexttrackingnumber?: number | undefined;
    private _numbergroupformat?: string | undefined;
    private _numberseparator?: string | undefined;
    private _offlinesyncinterval?: number | undefined;
    private _outlooksyncinterval?: number | undefined;
    private _paginglimit?: number | undefined;
    private _personalizationsettings?: string | undefined;
    private _pmdesignator?: string | undefined;
    private _reportscripterrors?: number | undefined;
    private _resourcebookingexchangesyncversion?: number | undefined;
    private _selectedglobalfilterid?: string | undefined;
    private _showweeknumber?: boolean | undefined;
    private _splitviewstate?: boolean | undefined;
    private _synccontactcompany?: boolean | undefined;
    private _systemuserid?: string | undefined;
    private _systemuserid_systemuser?: Systemuser | undefined;
    private _timeformatcode?: number | undefined;
    private _timeformatstring?: string | undefined;
    private _timeseparator?: string | undefined;
    private _timezonebias?: number | undefined;
    private _timezonecode?: number | undefined;
    private _timezonedaylightbias?: number | undefined;
    private _timezonedaylightday?: number | undefined;
    private _timezonedaylightdayofweek?: number | undefined;
    private _timezonedaylighthour?: number | undefined;
    private _timezonedaylightminute?: number | undefined;
    private _timezonedaylightmonth?: number | undefined;
    private _timezonedaylightsecond?: number | undefined;
    private _timezonedaylightyear?: number | undefined;
    private _timezonestandardbias?: number | undefined;
    private _timezonestandardday?: number | undefined;
    private _timezonestandarddayofweek?: number | undefined;
    private _timezonestandardhour?: number | undefined;
    private _timezonestandardminute?: number | undefined;
    private _timezonestandardmonth?: number | undefined;
    private _timezonestandardsecond?: number | undefined;
    private _timezonestandardyear?: number | undefined;
    private _trackingtokenid?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _uilanguageid?: number | undefined;
    private _usecrmformforappointment?: boolean | undefined;
    private _usecrmformforcontact?: boolean | undefined;
    private _usecrmformforemail?: boolean | undefined;
    private _usecrmformfortask?: boolean | undefined;
    private _useimagestrips?: boolean | undefined;
    private _userprofile?: string | undefined;
    private _versionnumber?: number | undefined;
    private _visualizationpanelayout?: number | undefined;
    private _workdaystarttime?: string | undefined;
    private _workdaystoptime?: string | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Gets the addressbooksyncinterval property value. 
     * @returns a integer
     */
    public get addressbooksyncinterval() {
        return this._addressbooksyncinterval;
    };
    /**
     * Sets the addressbooksyncinterval property value. 
     * @param value Value to set for the addressbooksyncinterval property.
     */
    public set addressbooksyncinterval(value: number | undefined) {
        this._addressbooksyncinterval = value;
    };
    /**
     * Gets the advancedfindstartupmode property value. 
     * @returns a integer
     */
    public get advancedfindstartupmode() {
        return this._advancedfindstartupmode;
    };
    /**
     * Sets the advancedfindstartupmode property value. 
     * @param value Value to set for the advancedfindstartupmode property.
     */
    public set advancedfindstartupmode(value: number | undefined) {
        this._advancedfindstartupmode = value;
    };
    /**
     * Gets the amdesignator property value. 
     * @returns a string
     */
    public get amdesignator() {
        return this._amdesignator;
    };
    /**
     * Sets the amdesignator property value. 
     * @param value Value to set for the amdesignator property.
     */
    public set amdesignator(value: string | undefined) {
        this._amdesignator = value;
    };
    /**
     * Gets the autocaptureuserstatus property value. 
     * @returns a integer
     */
    public get autocaptureuserstatus() {
        return this._autocaptureuserstatus;
    };
    /**
     * Sets the autocaptureuserstatus property value. 
     * @param value Value to set for the autocaptureuserstatus property.
     */
    public set autocaptureuserstatus(value: number | undefined) {
        this._autocaptureuserstatus = value;
    };
    /**
     * Gets the autocreatecontactonpromote property value. 
     * @returns a integer
     */
    public get autocreatecontactonpromote() {
        return this._autocreatecontactonpromote;
    };
    /**
     * Sets the autocreatecontactonpromote property value. 
     * @param value Value to set for the autocreatecontactonpromote property.
     */
    public set autocreatecontactonpromote(value: number | undefined) {
        this._autocreatecontactonpromote = value;
    };
    /**
     * Gets the businessunitid property value. 
     * @returns a string
     */
    public get businessunitid() {
        return this._businessunitid;
    };
    /**
     * Sets the businessunitid property value. 
     * @param value Value to set for the businessunitid property.
     */
    public set businessunitid(value: string | undefined) {
        this._businessunitid = value;
    };
    /**
     * Gets the businessunitid_businessunit property value. 
     * @returns a businessunit
     */
    public get businessunitid_businessunit() {
        return this._businessunitid_businessunit;
    };
    /**
     * Sets the businessunitid_businessunit property value. 
     * @param value Value to set for the businessunitid_businessunit property.
     */
    public set businessunitid_businessunit(value: Businessunit | undefined) {
        this._businessunitid_businessunit = value;
    };
    /**
     * Gets the calendartype property value. 
     * @returns a integer
     */
    public get calendartype() {
        return this._calendartype;
    };
    /**
     * Sets the calendartype property value. 
     * @param value Value to set for the calendartype property.
     */
    public set calendartype(value: number | undefined) {
        this._calendartype = value;
    };
    /**
     * Instantiates a new usersettings and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * Gets the currencyformatcode property value. 
     * @returns a integer
     */
    public get currencyformatcode() {
        return this._currencyformatcode;
    };
    /**
     * Sets the currencyformatcode property value. 
     * @param value Value to set for the currencyformatcode property.
     */
    public set currencyformatcode(value: number | undefined) {
        this._currencyformatcode = value;
    };
    /**
     * Gets the currencysymbol property value. 
     * @returns a string
     */
    public get currencysymbol() {
        return this._currencysymbol;
    };
    /**
     * Sets the currencysymbol property value. 
     * @param value Value to set for the currencysymbol property.
     */
    public set currencysymbol(value: string | undefined) {
        this._currencysymbol = value;
    };
    /**
     * Gets the datavalidationmodeforexporttoexcel property value. 
     * @returns a integer
     */
    public get datavalidationmodeforexporttoexcel() {
        return this._datavalidationmodeforexporttoexcel;
    };
    /**
     * Sets the datavalidationmodeforexporttoexcel property value. 
     * @param value Value to set for the datavalidationmodeforexporttoexcel property.
     */
    public set datavalidationmodeforexporttoexcel(value: number | undefined) {
        this._datavalidationmodeforexporttoexcel = value;
    };
    /**
     * Gets the dateformatcode property value. 
     * @returns a integer
     */
    public get dateformatcode() {
        return this._dateformatcode;
    };
    /**
     * Sets the dateformatcode property value. 
     * @param value Value to set for the dateformatcode property.
     */
    public set dateformatcode(value: number | undefined) {
        this._dateformatcode = value;
    };
    /**
     * Gets the dateformatstring property value. 
     * @returns a string
     */
    public get dateformatstring() {
        return this._dateformatstring;
    };
    /**
     * Sets the dateformatstring property value. 
     * @param value Value to set for the dateformatstring property.
     */
    public set dateformatstring(value: string | undefined) {
        this._dateformatstring = value;
    };
    /**
     * Gets the dateseparator property value. 
     * @returns a string
     */
    public get dateseparator() {
        return this._dateseparator;
    };
    /**
     * Sets the dateseparator property value. 
     * @param value Value to set for the dateseparator property.
     */
    public set dateseparator(value: string | undefined) {
        this._dateseparator = value;
    };
    /**
     * Gets the decimalsymbol property value. 
     * @returns a string
     */
    public get decimalsymbol() {
        return this._decimalsymbol;
    };
    /**
     * Sets the decimalsymbol property value. 
     * @param value Value to set for the decimalsymbol property.
     */
    public set decimalsymbol(value: string | undefined) {
        this._decimalsymbol = value;
    };
    /**
     * Gets the defaultcalendarview property value. 
     * @returns a integer
     */
    public get defaultcalendarview() {
        return this._defaultcalendarview;
    };
    /**
     * Sets the defaultcalendarview property value. 
     * @param value Value to set for the defaultcalendarview property.
     */
    public set defaultcalendarview(value: number | undefined) {
        this._defaultcalendarview = value;
    };
    /**
     * Gets the defaultcountrycode property value. 
     * @returns a string
     */
    public get defaultcountrycode() {
        return this._defaultcountrycode;
    };
    /**
     * Sets the defaultcountrycode property value. 
     * @param value Value to set for the defaultcountrycode property.
     */
    public set defaultcountrycode(value: string | undefined) {
        this._defaultcountrycode = value;
    };
    /**
     * Gets the defaultdashboardid property value. 
     * @returns a string
     */
    public get defaultdashboardid() {
        return this._defaultdashboardid;
    };
    /**
     * Sets the defaultdashboardid property value. 
     * @param value Value to set for the defaultdashboardid property.
     */
    public set defaultdashboardid(value: string | undefined) {
        this._defaultdashboardid = value;
    };
    /**
     * Gets the defaultsearchexperience property value. 
     * @returns a integer
     */
    public get defaultsearchexperience() {
        return this._defaultsearchexperience;
    };
    /**
     * Sets the defaultsearchexperience property value. 
     * @param value Value to set for the defaultsearchexperience property.
     */
    public set defaultsearchexperience(value: number | undefined) {
        this._defaultsearchexperience = value;
    };
    /**
     * Gets the entityformmode property value. 
     * @returns a integer
     */
    public get entityformmode() {
        return this._entityformmode;
    };
    /**
     * Sets the entityformmode property value. 
     * @param value Value to set for the entityformmode property.
     */
    public set entityformmode(value: number | undefined) {
        this._entityformmode = value;
    };
    /**
     * Gets the fullnameconventioncode property value. 
     * @returns a integer
     */
    public get fullnameconventioncode() {
        return this._fullnameconventioncode;
    };
    /**
     * Sets the fullnameconventioncode property value. 
     * @param value Value to set for the fullnameconventioncode property.
     */
    public set fullnameconventioncode(value: number | undefined) {
        this._fullnameconventioncode = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Usersettings)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Usersettings)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Usersettings)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Usersettings)._modifiedonbehalfby_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Usersettings)._transactioncurrencyid_value = n.getStringValue(); },
            "addressbooksyncinterval": (o, n) => { (o as unknown as Usersettings).addressbooksyncinterval = n.getNumberValue(); },
            "advancedfindstartupmode": (o, n) => { (o as unknown as Usersettings).advancedfindstartupmode = n.getNumberValue(); },
            "amdesignator": (o, n) => { (o as unknown as Usersettings).amdesignator = n.getStringValue(); },
            "autocaptureuserstatus": (o, n) => { (o as unknown as Usersettings).autocaptureuserstatus = n.getNumberValue(); },
            "autocreatecontactonpromote": (o, n) => { (o as unknown as Usersettings).autocreatecontactonpromote = n.getNumberValue(); },
            "businessunitid": (o, n) => { (o as unknown as Usersettings).businessunitid = n.getStringValue(); },
            "businessunitid_businessunit": (o, n) => { (o as unknown as Usersettings).businessunitid_businessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "calendartype": (o, n) => { (o as unknown as Usersettings).calendartype = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Usersettings).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Usersettings).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Usersettings).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "currencyformatcode": (o, n) => { (o as unknown as Usersettings).currencyformatcode = n.getNumberValue(); },
            "currencysymbol": (o, n) => { (o as unknown as Usersettings).currencysymbol = n.getStringValue(); },
            "datavalidationmodeforexporttoexcel": (o, n) => { (o as unknown as Usersettings).datavalidationmodeforexporttoexcel = n.getNumberValue(); },
            "dateformatcode": (o, n) => { (o as unknown as Usersettings).dateformatcode = n.getNumberValue(); },
            "dateformatstring": (o, n) => { (o as unknown as Usersettings).dateformatstring = n.getStringValue(); },
            "dateseparator": (o, n) => { (o as unknown as Usersettings).dateseparator = n.getStringValue(); },
            "decimalsymbol": (o, n) => { (o as unknown as Usersettings).decimalsymbol = n.getStringValue(); },
            "defaultcalendarview": (o, n) => { (o as unknown as Usersettings).defaultcalendarview = n.getNumberValue(); },
            "defaultcountrycode": (o, n) => { (o as unknown as Usersettings).defaultcountrycode = n.getStringValue(); },
            "defaultdashboardid": (o, n) => { (o as unknown as Usersettings).defaultdashboardid = n.getStringValue(); },
            "defaultsearchexperience": (o, n) => { (o as unknown as Usersettings).defaultsearchexperience = n.getNumberValue(); },
            "entityformmode": (o, n) => { (o as unknown as Usersettings).entityformmode = n.getNumberValue(); },
            "fullnameconventioncode": (o, n) => { (o as unknown as Usersettings).fullnameconventioncode = n.getNumberValue(); },
            "getstartedpanecontentenabled": (o, n) => { (o as unknown as Usersettings).getstartedpanecontentenabled = n.getBooleanValue(); },
            "helplanguageid": (o, n) => { (o as unknown as Usersettings).helplanguageid = n.getNumberValue(); },
            "homepagearea": (o, n) => { (o as unknown as Usersettings).homepagearea = n.getStringValue(); },
            "homepagelayout": (o, n) => { (o as unknown as Usersettings).homepagelayout = n.getStringValue(); },
            "homepagesubarea": (o, n) => { (o as unknown as Usersettings).homepagesubarea = n.getStringValue(); },
            "ignoreunsolicitedemail": (o, n) => { (o as unknown as Usersettings).ignoreunsolicitedemail = n.getBooleanValue(); },
            "incomingemailfilteringmethod": (o, n) => { (o as unknown as Usersettings).incomingemailfilteringmethod = n.getNumberValue(); },
            "isappsforcrmalertdismissed": (o, n) => { (o as unknown as Usersettings).isappsforcrmalertdismissed = n.getBooleanValue(); },
            "isautodatacaptureenabled": (o, n) => { (o as unknown as Usersettings).isautodatacaptureenabled = n.getBooleanValue(); },
            "isdefaultcountrycodecheckenabled": (o, n) => { (o as unknown as Usersettings).isdefaultcountrycodecheckenabled = n.getBooleanValue(); },
            "isduplicatedetectionenabledwhengoingonline": (o, n) => { (o as unknown as Usersettings).isduplicatedetectionenabledwhengoingonline = n.getBooleanValue(); },
            "isemailconversationviewenabled": (o, n) => { (o as unknown as Usersettings).isemailconversationviewenabled = n.getBooleanValue(); },
            "isguidedhelpenabled": (o, n) => { (o as unknown as Usersettings).isguidedhelpenabled = n.getBooleanValue(); },
            "isresourcebookingexchangesyncenabled": (o, n) => { (o as unknown as Usersettings).isresourcebookingexchangesyncenabled = n.getBooleanValue(); },
            "issendasallowed": (o, n) => { (o as unknown as Usersettings).issendasallowed = n.getBooleanValue(); },
            "lastalertsviewedtime": (o, n) => { (o as unknown as Usersettings).lastalertsviewedtime = n.getDateValue(); },
            "lastmodifiedtimeforviewpersonalizationsettings": (o, n) => { (o as unknown as Usersettings).lastmodifiedtimeforviewpersonalizationsettings = n.getDateValue(); },
            "localeid": (o, n) => { (o as unknown as Usersettings).localeid = n.getNumberValue(); },
            "longdateformatcode": (o, n) => { (o as unknown as Usersettings).longdateformatcode = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Usersettings).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Usersettings).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Usersettings).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "negativecurrencyformatcode": (o, n) => { (o as unknown as Usersettings).negativecurrencyformatcode = n.getNumberValue(); },
            "negativeformatcode": (o, n) => { (o as unknown as Usersettings).negativeformatcode = n.getNumberValue(); },
            "nexttrackingnumber": (o, n) => { (o as unknown as Usersettings).nexttrackingnumber = n.getNumberValue(); },
            "numbergroupformat": (o, n) => { (o as unknown as Usersettings).numbergroupformat = n.getStringValue(); },
            "numberseparator": (o, n) => { (o as unknown as Usersettings).numberseparator = n.getStringValue(); },
            "offlinesyncinterval": (o, n) => { (o as unknown as Usersettings).offlinesyncinterval = n.getNumberValue(); },
            "outlooksyncinterval": (o, n) => { (o as unknown as Usersettings).outlooksyncinterval = n.getNumberValue(); },
            "paginglimit": (o, n) => { (o as unknown as Usersettings).paginglimit = n.getNumberValue(); },
            "personalizationsettings": (o, n) => { (o as unknown as Usersettings).personalizationsettings = n.getStringValue(); },
            "pmdesignator": (o, n) => { (o as unknown as Usersettings).pmdesignator = n.getStringValue(); },
            "reportscripterrors": (o, n) => { (o as unknown as Usersettings).reportscripterrors = n.getNumberValue(); },
            "resourcebookingexchangesyncversion": (o, n) => { (o as unknown as Usersettings).resourcebookingexchangesyncversion = n.getNumberValue(); },
            "selectedglobalfilterid": (o, n) => { (o as unknown as Usersettings).selectedglobalfilterid = n.getStringValue(); },
            "showweeknumber": (o, n) => { (o as unknown as Usersettings).showweeknumber = n.getBooleanValue(); },
            "splitviewstate": (o, n) => { (o as unknown as Usersettings).splitviewstate = n.getBooleanValue(); },
            "synccontactcompany": (o, n) => { (o as unknown as Usersettings).synccontactcompany = n.getBooleanValue(); },
            "systemuserid": (o, n) => { (o as unknown as Usersettings).systemuserid = n.getStringValue(); },
            "systemuserid_systemuser": (o, n) => { (o as unknown as Usersettings).systemuserid_systemuser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "timeformatcode": (o, n) => { (o as unknown as Usersettings).timeformatcode = n.getNumberValue(); },
            "timeformatstring": (o, n) => { (o as unknown as Usersettings).timeformatstring = n.getStringValue(); },
            "timeseparator": (o, n) => { (o as unknown as Usersettings).timeseparator = n.getStringValue(); },
            "timezonebias": (o, n) => { (o as unknown as Usersettings).timezonebias = n.getNumberValue(); },
            "timezonecode": (o, n) => { (o as unknown as Usersettings).timezonecode = n.getNumberValue(); },
            "timezonedaylightbias": (o, n) => { (o as unknown as Usersettings).timezonedaylightbias = n.getNumberValue(); },
            "timezonedaylightday": (o, n) => { (o as unknown as Usersettings).timezonedaylightday = n.getNumberValue(); },
            "timezonedaylightdayofweek": (o, n) => { (o as unknown as Usersettings).timezonedaylightdayofweek = n.getNumberValue(); },
            "timezonedaylighthour": (o, n) => { (o as unknown as Usersettings).timezonedaylighthour = n.getNumberValue(); },
            "timezonedaylightminute": (o, n) => { (o as unknown as Usersettings).timezonedaylightminute = n.getNumberValue(); },
            "timezonedaylightmonth": (o, n) => { (o as unknown as Usersettings).timezonedaylightmonth = n.getNumberValue(); },
            "timezonedaylightsecond": (o, n) => { (o as unknown as Usersettings).timezonedaylightsecond = n.getNumberValue(); },
            "timezonedaylightyear": (o, n) => { (o as unknown as Usersettings).timezonedaylightyear = n.getNumberValue(); },
            "timezonestandardbias": (o, n) => { (o as unknown as Usersettings).timezonestandardbias = n.getNumberValue(); },
            "timezonestandardday": (o, n) => { (o as unknown as Usersettings).timezonestandardday = n.getNumberValue(); },
            "timezonestandarddayofweek": (o, n) => { (o as unknown as Usersettings).timezonestandarddayofweek = n.getNumberValue(); },
            "timezonestandardhour": (o, n) => { (o as unknown as Usersettings).timezonestandardhour = n.getNumberValue(); },
            "timezonestandardminute": (o, n) => { (o as unknown as Usersettings).timezonestandardminute = n.getNumberValue(); },
            "timezonestandardmonth": (o, n) => { (o as unknown as Usersettings).timezonestandardmonth = n.getNumberValue(); },
            "timezonestandardsecond": (o, n) => { (o as unknown as Usersettings).timezonestandardsecond = n.getNumberValue(); },
            "timezonestandardyear": (o, n) => { (o as unknown as Usersettings).timezonestandardyear = n.getNumberValue(); },
            "trackingtokenid": (o, n) => { (o as unknown as Usersettings).trackingtokenid = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Usersettings).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "uilanguageid": (o, n) => { (o as unknown as Usersettings).uilanguageid = n.getNumberValue(); },
            "usecrmformforappointment": (o, n) => { (o as unknown as Usersettings).usecrmformforappointment = n.getBooleanValue(); },
            "usecrmformforcontact": (o, n) => { (o as unknown as Usersettings).usecrmformforcontact = n.getBooleanValue(); },
            "usecrmformforemail": (o, n) => { (o as unknown as Usersettings).usecrmformforemail = n.getBooleanValue(); },
            "usecrmformfortask": (o, n) => { (o as unknown as Usersettings).usecrmformfortask = n.getBooleanValue(); },
            "useimagestrips": (o, n) => { (o as unknown as Usersettings).useimagestrips = n.getBooleanValue(); },
            "userprofile": (o, n) => { (o as unknown as Usersettings).userprofile = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Usersettings).versionnumber = n.getNumberValue(); },
            "visualizationpanelayout": (o, n) => { (o as unknown as Usersettings).visualizationpanelayout = n.getNumberValue(); },
            "workdaystarttime": (o, n) => { (o as unknown as Usersettings).workdaystarttime = n.getStringValue(); },
            "workdaystoptime": (o, n) => { (o as unknown as Usersettings).workdaystoptime = n.getStringValue(); },
        };
    };
    /**
     * Gets the getstartedpanecontentenabled property value. 
     * @returns a boolean
     */
    public get getstartedpanecontentenabled() {
        return this._getstartedpanecontentenabled;
    };
    /**
     * Sets the getstartedpanecontentenabled property value. 
     * @param value Value to set for the getstartedpanecontentenabled property.
     */
    public set getstartedpanecontentenabled(value: boolean | undefined) {
        this._getstartedpanecontentenabled = value;
    };
    /**
     * Gets the helplanguageid property value. 
     * @returns a integer
     */
    public get helplanguageid() {
        return this._helplanguageid;
    };
    /**
     * Sets the helplanguageid property value. 
     * @param value Value to set for the helplanguageid property.
     */
    public set helplanguageid(value: number | undefined) {
        this._helplanguageid = value;
    };
    /**
     * Gets the homepagearea property value. 
     * @returns a string
     */
    public get homepagearea() {
        return this._homepagearea;
    };
    /**
     * Sets the homepagearea property value. 
     * @param value Value to set for the homepagearea property.
     */
    public set homepagearea(value: string | undefined) {
        this._homepagearea = value;
    };
    /**
     * Gets the homepagelayout property value. 
     * @returns a string
     */
    public get homepagelayout() {
        return this._homepagelayout;
    };
    /**
     * Sets the homepagelayout property value. 
     * @param value Value to set for the homepagelayout property.
     */
    public set homepagelayout(value: string | undefined) {
        this._homepagelayout = value;
    };
    /**
     * Gets the homepagesubarea property value. 
     * @returns a string
     */
    public get homepagesubarea() {
        return this._homepagesubarea;
    };
    /**
     * Sets the homepagesubarea property value. 
     * @param value Value to set for the homepagesubarea property.
     */
    public set homepagesubarea(value: string | undefined) {
        this._homepagesubarea = value;
    };
    /**
     * Gets the ignoreunsolicitedemail property value. 
     * @returns a boolean
     */
    public get ignoreunsolicitedemail() {
        return this._ignoreunsolicitedemail;
    };
    /**
     * Sets the ignoreunsolicitedemail property value. 
     * @param value Value to set for the ignoreunsolicitedemail property.
     */
    public set ignoreunsolicitedemail(value: boolean | undefined) {
        this._ignoreunsolicitedemail = value;
    };
    /**
     * Gets the incomingemailfilteringmethod property value. 
     * @returns a integer
     */
    public get incomingemailfilteringmethod() {
        return this._incomingemailfilteringmethod;
    };
    /**
     * Sets the incomingemailfilteringmethod property value. 
     * @param value Value to set for the incomingemailfilteringmethod property.
     */
    public set incomingemailfilteringmethod(value: number | undefined) {
        this._incomingemailfilteringmethod = value;
    };
    /**
     * Gets the isappsforcrmalertdismissed property value. 
     * @returns a boolean
     */
    public get isappsforcrmalertdismissed() {
        return this._isappsforcrmalertdismissed;
    };
    /**
     * Sets the isappsforcrmalertdismissed property value. 
     * @param value Value to set for the isappsforcrmalertdismissed property.
     */
    public set isappsforcrmalertdismissed(value: boolean | undefined) {
        this._isappsforcrmalertdismissed = value;
    };
    /**
     * Gets the isautodatacaptureenabled property value. 
     * @returns a boolean
     */
    public get isautodatacaptureenabled() {
        return this._isautodatacaptureenabled;
    };
    /**
     * Sets the isautodatacaptureenabled property value. 
     * @param value Value to set for the isautodatacaptureenabled property.
     */
    public set isautodatacaptureenabled(value: boolean | undefined) {
        this._isautodatacaptureenabled = value;
    };
    /**
     * Gets the isdefaultcountrycodecheckenabled property value. 
     * @returns a boolean
     */
    public get isdefaultcountrycodecheckenabled() {
        return this._isdefaultcountrycodecheckenabled;
    };
    /**
     * Sets the isdefaultcountrycodecheckenabled property value. 
     * @param value Value to set for the isdefaultcountrycodecheckenabled property.
     */
    public set isdefaultcountrycodecheckenabled(value: boolean | undefined) {
        this._isdefaultcountrycodecheckenabled = value;
    };
    /**
     * Gets the isduplicatedetectionenabledwhengoingonline property value. 
     * @returns a boolean
     */
    public get isduplicatedetectionenabledwhengoingonline() {
        return this._isduplicatedetectionenabledwhengoingonline;
    };
    /**
     * Sets the isduplicatedetectionenabledwhengoingonline property value. 
     * @param value Value to set for the isduplicatedetectionenabledwhengoingonline property.
     */
    public set isduplicatedetectionenabledwhengoingonline(value: boolean | undefined) {
        this._isduplicatedetectionenabledwhengoingonline = value;
    };
    /**
     * Gets the isemailconversationviewenabled property value. 
     * @returns a boolean
     */
    public get isemailconversationviewenabled() {
        return this._isemailconversationviewenabled;
    };
    /**
     * Sets the isemailconversationviewenabled property value. 
     * @param value Value to set for the isemailconversationviewenabled property.
     */
    public set isemailconversationviewenabled(value: boolean | undefined) {
        this._isemailconversationviewenabled = value;
    };
    /**
     * Gets the isguidedhelpenabled property value. 
     * @returns a boolean
     */
    public get isguidedhelpenabled() {
        return this._isguidedhelpenabled;
    };
    /**
     * Sets the isguidedhelpenabled property value. 
     * @param value Value to set for the isguidedhelpenabled property.
     */
    public set isguidedhelpenabled(value: boolean | undefined) {
        this._isguidedhelpenabled = value;
    };
    /**
     * Gets the isresourcebookingexchangesyncenabled property value. 
     * @returns a boolean
     */
    public get isresourcebookingexchangesyncenabled() {
        return this._isresourcebookingexchangesyncenabled;
    };
    /**
     * Sets the isresourcebookingexchangesyncenabled property value. 
     * @param value Value to set for the isresourcebookingexchangesyncenabled property.
     */
    public set isresourcebookingexchangesyncenabled(value: boolean | undefined) {
        this._isresourcebookingexchangesyncenabled = value;
    };
    /**
     * Gets the issendasallowed property value. 
     * @returns a boolean
     */
    public get issendasallowed() {
        return this._issendasallowed;
    };
    /**
     * Sets the issendasallowed property value. 
     * @param value Value to set for the issendasallowed property.
     */
    public set issendasallowed(value: boolean | undefined) {
        this._issendasallowed = value;
    };
    /**
     * Gets the lastalertsviewedtime property value. 
     * @returns a Date
     */
    public get lastalertsviewedtime() {
        return this._lastalertsviewedtime;
    };
    /**
     * Sets the lastalertsviewedtime property value. 
     * @param value Value to set for the lastalertsviewedtime property.
     */
    public set lastalertsviewedtime(value: Date | undefined) {
        this._lastalertsviewedtime = value;
    };
    /**
     * Gets the lastmodifiedtimeforviewpersonalizationsettings property value. 
     * @returns a Date
     */
    public get lastmodifiedtimeforviewpersonalizationsettings() {
        return this._lastmodifiedtimeforviewpersonalizationsettings;
    };
    /**
     * Sets the lastmodifiedtimeforviewpersonalizationsettings property value. 
     * @param value Value to set for the lastmodifiedtimeforviewpersonalizationsettings property.
     */
    public set lastmodifiedtimeforviewpersonalizationsettings(value: Date | undefined) {
        this._lastmodifiedtimeforviewpersonalizationsettings = value;
    };
    /**
     * Gets the localeid property value. 
     * @returns a integer
     */
    public get localeid() {
        return this._localeid;
    };
    /**
     * Sets the localeid property value. 
     * @param value Value to set for the localeid property.
     */
    public set localeid(value: number | undefined) {
        this._localeid = value;
    };
    /**
     * Gets the longdateformatcode property value. 
     * @returns a integer
     */
    public get longdateformatcode() {
        return this._longdateformatcode;
    };
    /**
     * Sets the longdateformatcode property value. 
     * @param value Value to set for the longdateformatcode property.
     */
    public set longdateformatcode(value: number | undefined) {
        this._longdateformatcode = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the negativecurrencyformatcode property value. 
     * @returns a integer
     */
    public get negativecurrencyformatcode() {
        return this._negativecurrencyformatcode;
    };
    /**
     * Sets the negativecurrencyformatcode property value. 
     * @param value Value to set for the negativecurrencyformatcode property.
     */
    public set negativecurrencyformatcode(value: number | undefined) {
        this._negativecurrencyformatcode = value;
    };
    /**
     * Gets the negativeformatcode property value. 
     * @returns a integer
     */
    public get negativeformatcode() {
        return this._negativeformatcode;
    };
    /**
     * Sets the negativeformatcode property value. 
     * @param value Value to set for the negativeformatcode property.
     */
    public set negativeformatcode(value: number | undefined) {
        this._negativeformatcode = value;
    };
    /**
     * Gets the nexttrackingnumber property value. 
     * @returns a integer
     */
    public get nexttrackingnumber() {
        return this._nexttrackingnumber;
    };
    /**
     * Sets the nexttrackingnumber property value. 
     * @param value Value to set for the nexttrackingnumber property.
     */
    public set nexttrackingnumber(value: number | undefined) {
        this._nexttrackingnumber = value;
    };
    /**
     * Gets the numbergroupformat property value. 
     * @returns a string
     */
    public get numbergroupformat() {
        return this._numbergroupformat;
    };
    /**
     * Sets the numbergroupformat property value. 
     * @param value Value to set for the numbergroupformat property.
     */
    public set numbergroupformat(value: string | undefined) {
        this._numbergroupformat = value;
    };
    /**
     * Gets the numberseparator property value. 
     * @returns a string
     */
    public get numberseparator() {
        return this._numberseparator;
    };
    /**
     * Sets the numberseparator property value. 
     * @param value Value to set for the numberseparator property.
     */
    public set numberseparator(value: string | undefined) {
        this._numberseparator = value;
    };
    /**
     * Gets the offlinesyncinterval property value. 
     * @returns a integer
     */
    public get offlinesyncinterval() {
        return this._offlinesyncinterval;
    };
    /**
     * Sets the offlinesyncinterval property value. 
     * @param value Value to set for the offlinesyncinterval property.
     */
    public set offlinesyncinterval(value: number | undefined) {
        this._offlinesyncinterval = value;
    };
    /**
     * Gets the outlooksyncinterval property value. 
     * @returns a integer
     */
    public get outlooksyncinterval() {
        return this._outlooksyncinterval;
    };
    /**
     * Sets the outlooksyncinterval property value. 
     * @param value Value to set for the outlooksyncinterval property.
     */
    public set outlooksyncinterval(value: number | undefined) {
        this._outlooksyncinterval = value;
    };
    /**
     * Gets the paginglimit property value. 
     * @returns a integer
     */
    public get paginglimit() {
        return this._paginglimit;
    };
    /**
     * Sets the paginglimit property value. 
     * @param value Value to set for the paginglimit property.
     */
    public set paginglimit(value: number | undefined) {
        this._paginglimit = value;
    };
    /**
     * Gets the personalizationsettings property value. 
     * @returns a string
     */
    public get personalizationsettings() {
        return this._personalizationsettings;
    };
    /**
     * Sets the personalizationsettings property value. 
     * @param value Value to set for the personalizationsettings property.
     */
    public set personalizationsettings(value: string | undefined) {
        this._personalizationsettings = value;
    };
    /**
     * Gets the pmdesignator property value. 
     * @returns a string
     */
    public get pmdesignator() {
        return this._pmdesignator;
    };
    /**
     * Sets the pmdesignator property value. 
     * @param value Value to set for the pmdesignator property.
     */
    public set pmdesignator(value: string | undefined) {
        this._pmdesignator = value;
    };
    /**
     * Gets the reportscripterrors property value. 
     * @returns a integer
     */
    public get reportscripterrors() {
        return this._reportscripterrors;
    };
    /**
     * Sets the reportscripterrors property value. 
     * @param value Value to set for the reportscripterrors property.
     */
    public set reportscripterrors(value: number | undefined) {
        this._reportscripterrors = value;
    };
    /**
     * Gets the resourcebookingexchangesyncversion property value. 
     * @returns a int64
     */
    public get resourcebookingexchangesyncversion() {
        return this._resourcebookingexchangesyncversion;
    };
    /**
     * Sets the resourcebookingexchangesyncversion property value. 
     * @param value Value to set for the resourcebookingexchangesyncversion property.
     */
    public set resourcebookingexchangesyncversion(value: number | undefined) {
        this._resourcebookingexchangesyncversion = value;
    };
    /**
     * Gets the selectedglobalfilterid property value. 
     * @returns a string
     */
    public get selectedglobalfilterid() {
        return this._selectedglobalfilterid;
    };
    /**
     * Sets the selectedglobalfilterid property value. 
     * @param value Value to set for the selectedglobalfilterid property.
     */
    public set selectedglobalfilterid(value: string | undefined) {
        this._selectedglobalfilterid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeNumberValue("addressbooksyncinterval", this.addressbooksyncinterval);
        writer.writeNumberValue("advancedfindstartupmode", this.advancedfindstartupmode);
        writer.writeStringValue("amdesignator", this.amdesignator);
        writer.writeNumberValue("autocaptureuserstatus", this.autocaptureuserstatus);
        writer.writeNumberValue("autocreatecontactonpromote", this.autocreatecontactonpromote);
        writer.writeStringValue("businessunitid", this.businessunitid);
        writer.writeObjectValue<Businessunit>("businessunitid_businessunit", this.businessunitid_businessunit);
        writer.writeNumberValue("calendartype", this.calendartype);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("currencyformatcode", this.currencyformatcode);
        writer.writeStringValue("currencysymbol", this.currencysymbol);
        writer.writeNumberValue("datavalidationmodeforexporttoexcel", this.datavalidationmodeforexporttoexcel);
        writer.writeNumberValue("dateformatcode", this.dateformatcode);
        writer.writeStringValue("dateformatstring", this.dateformatstring);
        writer.writeStringValue("dateseparator", this.dateseparator);
        writer.writeStringValue("decimalsymbol", this.decimalsymbol);
        writer.writeNumberValue("defaultcalendarview", this.defaultcalendarview);
        writer.writeStringValue("defaultcountrycode", this.defaultcountrycode);
        writer.writeStringValue("defaultdashboardid", this.defaultdashboardid);
        writer.writeNumberValue("defaultsearchexperience", this.defaultsearchexperience);
        writer.writeNumberValue("entityformmode", this.entityformmode);
        writer.writeNumberValue("fullnameconventioncode", this.fullnameconventioncode);
        writer.writeBooleanValue("getstartedpanecontentenabled", this.getstartedpanecontentenabled);
        writer.writeNumberValue("helplanguageid", this.helplanguageid);
        writer.writeStringValue("homepagearea", this.homepagearea);
        writer.writeStringValue("homepagelayout", this.homepagelayout);
        writer.writeStringValue("homepagesubarea", this.homepagesubarea);
        writer.writeBooleanValue("ignoreunsolicitedemail", this.ignoreunsolicitedemail);
        writer.writeNumberValue("incomingemailfilteringmethod", this.incomingemailfilteringmethod);
        writer.writeBooleanValue("isappsforcrmalertdismissed", this.isappsforcrmalertdismissed);
        writer.writeBooleanValue("isautodatacaptureenabled", this.isautodatacaptureenabled);
        writer.writeBooleanValue("isdefaultcountrycodecheckenabled", this.isdefaultcountrycodecheckenabled);
        writer.writeBooleanValue("isduplicatedetectionenabledwhengoingonline", this.isduplicatedetectionenabledwhengoingonline);
        writer.writeBooleanValue("isemailconversationviewenabled", this.isemailconversationviewenabled);
        writer.writeBooleanValue("isguidedhelpenabled", this.isguidedhelpenabled);
        writer.writeBooleanValue("isresourcebookingexchangesyncenabled", this.isresourcebookingexchangesyncenabled);
        writer.writeBooleanValue("issendasallowed", this.issendasallowed);
        writer.writeDateValue("lastalertsviewedtime", this.lastalertsviewedtime);
        writer.writeDateValue("lastmodifiedtimeforviewpersonalizationsettings", this.lastmodifiedtimeforviewpersonalizationsettings);
        writer.writeNumberValue("localeid", this.localeid);
        writer.writeNumberValue("longdateformatcode", this.longdateformatcode);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("negativecurrencyformatcode", this.negativecurrencyformatcode);
        writer.writeNumberValue("negativeformatcode", this.negativeformatcode);
        writer.writeNumberValue("nexttrackingnumber", this.nexttrackingnumber);
        writer.writeStringValue("numbergroupformat", this.numbergroupformat);
        writer.writeStringValue("numberseparator", this.numberseparator);
        writer.writeNumberValue("offlinesyncinterval", this.offlinesyncinterval);
        writer.writeNumberValue("outlooksyncinterval", this.outlooksyncinterval);
        writer.writeNumberValue("paginglimit", this.paginglimit);
        writer.writeStringValue("personalizationsettings", this.personalizationsettings);
        writer.writeStringValue("pmdesignator", this.pmdesignator);
        writer.writeNumberValue("reportscripterrors", this.reportscripterrors);
        writer.writeNumberValue("resourcebookingexchangesyncversion", this.resourcebookingexchangesyncversion);
        writer.writeStringValue("selectedglobalfilterid", this.selectedglobalfilterid);
        writer.writeBooleanValue("showweeknumber", this.showweeknumber);
        writer.writeBooleanValue("splitviewstate", this.splitviewstate);
        writer.writeBooleanValue("synccontactcompany", this.synccontactcompany);
        writer.writeStringValue("systemuserid", this.systemuserid);
        writer.writeObjectValue<Systemuser>("systemuserid_systemuser", this.systemuserid_systemuser);
        writer.writeNumberValue("timeformatcode", this.timeformatcode);
        writer.writeStringValue("timeformatstring", this.timeformatstring);
        writer.writeStringValue("timeseparator", this.timeseparator);
        writer.writeNumberValue("timezonebias", this.timezonebias);
        writer.writeNumberValue("timezonecode", this.timezonecode);
        writer.writeNumberValue("timezonedaylightbias", this.timezonedaylightbias);
        writer.writeNumberValue("timezonedaylightday", this.timezonedaylightday);
        writer.writeNumberValue("timezonedaylightdayofweek", this.timezonedaylightdayofweek);
        writer.writeNumberValue("timezonedaylighthour", this.timezonedaylighthour);
        writer.writeNumberValue("timezonedaylightminute", this.timezonedaylightminute);
        writer.writeNumberValue("timezonedaylightmonth", this.timezonedaylightmonth);
        writer.writeNumberValue("timezonedaylightsecond", this.timezonedaylightsecond);
        writer.writeNumberValue("timezonedaylightyear", this.timezonedaylightyear);
        writer.writeNumberValue("timezonestandardbias", this.timezonestandardbias);
        writer.writeNumberValue("timezonestandardday", this.timezonestandardday);
        writer.writeNumberValue("timezonestandarddayofweek", this.timezonestandarddayofweek);
        writer.writeNumberValue("timezonestandardhour", this.timezonestandardhour);
        writer.writeNumberValue("timezonestandardminute", this.timezonestandardminute);
        writer.writeNumberValue("timezonestandardmonth", this.timezonestandardmonth);
        writer.writeNumberValue("timezonestandardsecond", this.timezonestandardsecond);
        writer.writeNumberValue("timezonestandardyear", this.timezonestandardyear);
        writer.writeNumberValue("trackingtokenid", this.trackingtokenid);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("uilanguageid", this.uilanguageid);
        writer.writeBooleanValue("usecrmformforappointment", this.usecrmformforappointment);
        writer.writeBooleanValue("usecrmformforcontact", this.usecrmformforcontact);
        writer.writeBooleanValue("usecrmformforemail", this.usecrmformforemail);
        writer.writeBooleanValue("usecrmformfortask", this.usecrmformfortask);
        writer.writeBooleanValue("useimagestrips", this.useimagestrips);
        writer.writeStringValue("userprofile", this.userprofile);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeNumberValue("visualizationpanelayout", this.visualizationpanelayout);
        writer.writeStringValue("workdaystarttime", this.workdaystarttime);
        writer.writeStringValue("workdaystoptime", this.workdaystoptime);
    };
    /**
     * Gets the showweeknumber property value. 
     * @returns a boolean
     */
    public get showweeknumber() {
        return this._showweeknumber;
    };
    /**
     * Sets the showweeknumber property value. 
     * @param value Value to set for the showweeknumber property.
     */
    public set showweeknumber(value: boolean | undefined) {
        this._showweeknumber = value;
    };
    /**
     * Gets the splitviewstate property value. 
     * @returns a boolean
     */
    public get splitviewstate() {
        return this._splitviewstate;
    };
    /**
     * Sets the splitviewstate property value. 
     * @param value Value to set for the splitviewstate property.
     */
    public set splitviewstate(value: boolean | undefined) {
        this._splitviewstate = value;
    };
    /**
     * Gets the synccontactcompany property value. 
     * @returns a boolean
     */
    public get synccontactcompany() {
        return this._synccontactcompany;
    };
    /**
     * Sets the synccontactcompany property value. 
     * @param value Value to set for the synccontactcompany property.
     */
    public set synccontactcompany(value: boolean | undefined) {
        this._synccontactcompany = value;
    };
    /**
     * Gets the systemuserid property value. 
     * @returns a string
     */
    public get systemuserid() {
        return this._systemuserid;
    };
    /**
     * Sets the systemuserid property value. 
     * @param value Value to set for the systemuserid property.
     */
    public set systemuserid(value: string | undefined) {
        this._systemuserid = value;
    };
    /**
     * Gets the systemuserid_systemuser property value. 
     * @returns a systemuser
     */
    public get systemuserid_systemuser() {
        return this._systemuserid_systemuser;
    };
    /**
     * Sets the systemuserid_systemuser property value. 
     * @param value Value to set for the systemuserid_systemuser property.
     */
    public set systemuserid_systemuser(value: Systemuser | undefined) {
        this._systemuserid_systemuser = value;
    };
    /**
     * Gets the timeformatcode property value. 
     * @returns a integer
     */
    public get timeformatcode() {
        return this._timeformatcode;
    };
    /**
     * Sets the timeformatcode property value. 
     * @param value Value to set for the timeformatcode property.
     */
    public set timeformatcode(value: number | undefined) {
        this._timeformatcode = value;
    };
    /**
     * Gets the timeformatstring property value. 
     * @returns a string
     */
    public get timeformatstring() {
        return this._timeformatstring;
    };
    /**
     * Sets the timeformatstring property value. 
     * @param value Value to set for the timeformatstring property.
     */
    public set timeformatstring(value: string | undefined) {
        this._timeformatstring = value;
    };
    /**
     * Gets the timeseparator property value. 
     * @returns a string
     */
    public get timeseparator() {
        return this._timeseparator;
    };
    /**
     * Sets the timeseparator property value. 
     * @param value Value to set for the timeseparator property.
     */
    public set timeseparator(value: string | undefined) {
        this._timeseparator = value;
    };
    /**
     * Gets the timezonebias property value. 
     * @returns a integer
     */
    public get timezonebias() {
        return this._timezonebias;
    };
    /**
     * Sets the timezonebias property value. 
     * @param value Value to set for the timezonebias property.
     */
    public set timezonebias(value: number | undefined) {
        this._timezonebias = value;
    };
    /**
     * Gets the timezonecode property value. 
     * @returns a integer
     */
    public get timezonecode() {
        return this._timezonecode;
    };
    /**
     * Sets the timezonecode property value. 
     * @param value Value to set for the timezonecode property.
     */
    public set timezonecode(value: number | undefined) {
        this._timezonecode = value;
    };
    /**
     * Gets the timezonedaylightbias property value. 
     * @returns a integer
     */
    public get timezonedaylightbias() {
        return this._timezonedaylightbias;
    };
    /**
     * Sets the timezonedaylightbias property value. 
     * @param value Value to set for the timezonedaylightbias property.
     */
    public set timezonedaylightbias(value: number | undefined) {
        this._timezonedaylightbias = value;
    };
    /**
     * Gets the timezonedaylightday property value. 
     * @returns a integer
     */
    public get timezonedaylightday() {
        return this._timezonedaylightday;
    };
    /**
     * Sets the timezonedaylightday property value. 
     * @param value Value to set for the timezonedaylightday property.
     */
    public set timezonedaylightday(value: number | undefined) {
        this._timezonedaylightday = value;
    };
    /**
     * Gets the timezonedaylightdayofweek property value. 
     * @returns a integer
     */
    public get timezonedaylightdayofweek() {
        return this._timezonedaylightdayofweek;
    };
    /**
     * Sets the timezonedaylightdayofweek property value. 
     * @param value Value to set for the timezonedaylightdayofweek property.
     */
    public set timezonedaylightdayofweek(value: number | undefined) {
        this._timezonedaylightdayofweek = value;
    };
    /**
     * Gets the timezonedaylighthour property value. 
     * @returns a integer
     */
    public get timezonedaylighthour() {
        return this._timezonedaylighthour;
    };
    /**
     * Sets the timezonedaylighthour property value. 
     * @param value Value to set for the timezonedaylighthour property.
     */
    public set timezonedaylighthour(value: number | undefined) {
        this._timezonedaylighthour = value;
    };
    /**
     * Gets the timezonedaylightminute property value. 
     * @returns a integer
     */
    public get timezonedaylightminute() {
        return this._timezonedaylightminute;
    };
    /**
     * Sets the timezonedaylightminute property value. 
     * @param value Value to set for the timezonedaylightminute property.
     */
    public set timezonedaylightminute(value: number | undefined) {
        this._timezonedaylightminute = value;
    };
    /**
     * Gets the timezonedaylightmonth property value. 
     * @returns a integer
     */
    public get timezonedaylightmonth() {
        return this._timezonedaylightmonth;
    };
    /**
     * Sets the timezonedaylightmonth property value. 
     * @param value Value to set for the timezonedaylightmonth property.
     */
    public set timezonedaylightmonth(value: number | undefined) {
        this._timezonedaylightmonth = value;
    };
    /**
     * Gets the timezonedaylightsecond property value. 
     * @returns a integer
     */
    public get timezonedaylightsecond() {
        return this._timezonedaylightsecond;
    };
    /**
     * Sets the timezonedaylightsecond property value. 
     * @param value Value to set for the timezonedaylightsecond property.
     */
    public set timezonedaylightsecond(value: number | undefined) {
        this._timezonedaylightsecond = value;
    };
    /**
     * Gets the timezonedaylightyear property value. 
     * @returns a integer
     */
    public get timezonedaylightyear() {
        return this._timezonedaylightyear;
    };
    /**
     * Sets the timezonedaylightyear property value. 
     * @param value Value to set for the timezonedaylightyear property.
     */
    public set timezonedaylightyear(value: number | undefined) {
        this._timezonedaylightyear = value;
    };
    /**
     * Gets the timezonestandardbias property value. 
     * @returns a integer
     */
    public get timezonestandardbias() {
        return this._timezonestandardbias;
    };
    /**
     * Sets the timezonestandardbias property value. 
     * @param value Value to set for the timezonestandardbias property.
     */
    public set timezonestandardbias(value: number | undefined) {
        this._timezonestandardbias = value;
    };
    /**
     * Gets the timezonestandardday property value. 
     * @returns a integer
     */
    public get timezonestandardday() {
        return this._timezonestandardday;
    };
    /**
     * Sets the timezonestandardday property value. 
     * @param value Value to set for the timezonestandardday property.
     */
    public set timezonestandardday(value: number | undefined) {
        this._timezonestandardday = value;
    };
    /**
     * Gets the timezonestandarddayofweek property value. 
     * @returns a integer
     */
    public get timezonestandarddayofweek() {
        return this._timezonestandarddayofweek;
    };
    /**
     * Sets the timezonestandarddayofweek property value. 
     * @param value Value to set for the timezonestandarddayofweek property.
     */
    public set timezonestandarddayofweek(value: number | undefined) {
        this._timezonestandarddayofweek = value;
    };
    /**
     * Gets the timezonestandardhour property value. 
     * @returns a integer
     */
    public get timezonestandardhour() {
        return this._timezonestandardhour;
    };
    /**
     * Sets the timezonestandardhour property value. 
     * @param value Value to set for the timezonestandardhour property.
     */
    public set timezonestandardhour(value: number | undefined) {
        this._timezonestandardhour = value;
    };
    /**
     * Gets the timezonestandardminute property value. 
     * @returns a integer
     */
    public get timezonestandardminute() {
        return this._timezonestandardminute;
    };
    /**
     * Sets the timezonestandardminute property value. 
     * @param value Value to set for the timezonestandardminute property.
     */
    public set timezonestandardminute(value: number | undefined) {
        this._timezonestandardminute = value;
    };
    /**
     * Gets the timezonestandardmonth property value. 
     * @returns a integer
     */
    public get timezonestandardmonth() {
        return this._timezonestandardmonth;
    };
    /**
     * Sets the timezonestandardmonth property value. 
     * @param value Value to set for the timezonestandardmonth property.
     */
    public set timezonestandardmonth(value: number | undefined) {
        this._timezonestandardmonth = value;
    };
    /**
     * Gets the timezonestandardsecond property value. 
     * @returns a integer
     */
    public get timezonestandardsecond() {
        return this._timezonestandardsecond;
    };
    /**
     * Sets the timezonestandardsecond property value. 
     * @param value Value to set for the timezonestandardsecond property.
     */
    public set timezonestandardsecond(value: number | undefined) {
        this._timezonestandardsecond = value;
    };
    /**
     * Gets the timezonestandardyear property value. 
     * @returns a integer
     */
    public get timezonestandardyear() {
        return this._timezonestandardyear;
    };
    /**
     * Sets the timezonestandardyear property value. 
     * @param value Value to set for the timezonestandardyear property.
     */
    public set timezonestandardyear(value: number | undefined) {
        this._timezonestandardyear = value;
    };
    /**
     * Gets the trackingtokenid property value. 
     * @returns a integer
     */
    public get trackingtokenid() {
        return this._trackingtokenid;
    };
    /**
     * Sets the trackingtokenid property value. 
     * @param value Value to set for the trackingtokenid property.
     */
    public set trackingtokenid(value: number | undefined) {
        this._trackingtokenid = value;
    };
    /**
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
    };
    /**
     * Gets the uilanguageid property value. 
     * @returns a integer
     */
    public get uilanguageid() {
        return this._uilanguageid;
    };
    /**
     * Sets the uilanguageid property value. 
     * @param value Value to set for the uilanguageid property.
     */
    public set uilanguageid(value: number | undefined) {
        this._uilanguageid = value;
    };
    /**
     * Gets the usecrmformforappointment property value. 
     * @returns a boolean
     */
    public get usecrmformforappointment() {
        return this._usecrmformforappointment;
    };
    /**
     * Sets the usecrmformforappointment property value. 
     * @param value Value to set for the usecrmformforappointment property.
     */
    public set usecrmformforappointment(value: boolean | undefined) {
        this._usecrmformforappointment = value;
    };
    /**
     * Gets the usecrmformforcontact property value. 
     * @returns a boolean
     */
    public get usecrmformforcontact() {
        return this._usecrmformforcontact;
    };
    /**
     * Sets the usecrmformforcontact property value. 
     * @param value Value to set for the usecrmformforcontact property.
     */
    public set usecrmformforcontact(value: boolean | undefined) {
        this._usecrmformforcontact = value;
    };
    /**
     * Gets the usecrmformforemail property value. 
     * @returns a boolean
     */
    public get usecrmformforemail() {
        return this._usecrmformforemail;
    };
    /**
     * Sets the usecrmformforemail property value. 
     * @param value Value to set for the usecrmformforemail property.
     */
    public set usecrmformforemail(value: boolean | undefined) {
        this._usecrmformforemail = value;
    };
    /**
     * Gets the usecrmformfortask property value. 
     * @returns a boolean
     */
    public get usecrmformfortask() {
        return this._usecrmformfortask;
    };
    /**
     * Sets the usecrmformfortask property value. 
     * @param value Value to set for the usecrmformfortask property.
     */
    public set usecrmformfortask(value: boolean | undefined) {
        this._usecrmformfortask = value;
    };
    /**
     * Gets the useimagestrips property value. 
     * @returns a boolean
     */
    public get useimagestrips() {
        return this._useimagestrips;
    };
    /**
     * Sets the useimagestrips property value. 
     * @param value Value to set for the useimagestrips property.
     */
    public set useimagestrips(value: boolean | undefined) {
        this._useimagestrips = value;
    };
    /**
     * Gets the userprofile property value. 
     * @returns a string
     */
    public get userprofile() {
        return this._userprofile;
    };
    /**
     * Sets the userprofile property value. 
     * @param value Value to set for the userprofile property.
     */
    public set userprofile(value: string | undefined) {
        this._userprofile = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
    /**
     * Gets the visualizationpanelayout property value. 
     * @returns a integer
     */
    public get visualizationpanelayout() {
        return this._visualizationpanelayout;
    };
    /**
     * Sets the visualizationpanelayout property value. 
     * @param value Value to set for the visualizationpanelayout property.
     */
    public set visualizationpanelayout(value: number | undefined) {
        this._visualizationpanelayout = value;
    };
    /**
     * Gets the workdaystarttime property value. 
     * @returns a string
     */
    public get workdaystarttime() {
        return this._workdaystarttime;
    };
    /**
     * Sets the workdaystarttime property value. 
     * @param value Value to set for the workdaystarttime property.
     */
    public set workdaystarttime(value: string | undefined) {
        this._workdaystarttime = value;
    };
    /**
     * Gets the workdaystoptime property value. 
     * @returns a string
     */
    public get workdaystoptime() {
        return this._workdaystoptime;
    };
    /**
     * Sets the workdaystoptime property value. 
     * @param value Value to set for the workdaystoptime property.
     */
    public set workdaystoptime(value: string | undefined) {
        this._workdaystoptime = value;
    };
}
