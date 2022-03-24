import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {createWebresourceFromDiscriminatorValue} from './createWebresourceFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Organization, Processsession, Systemuser, Transactioncurrency, Webresource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Theme extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __logoid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _accentcolor?: string | undefined;
    private _backgroundcolor?: string | undefined;
    private _controlborder?: string | undefined;
    private _controlshade?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _defaultcustomentitycolor?: string | undefined;
    private _defaultentitycolor?: string | undefined;
    private _exchangerate?: number | undefined;
    private _globallinkcolor?: string | undefined;
    private _headercolor?: string | undefined;
    private _hoverlinkeffect?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _isdefaulttheme?: boolean | undefined;
    private _logoimage?: Webresource | undefined;
    private _logotooltip?: string | undefined;
    private _maincolor?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _navbarbackgroundcolor?: string | undefined;
    private _navbarshelfcolor?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _pageheaderbackgroundcolor?: string | undefined;
    private _panelheaderbackgroundcolor?: string | undefined;
    private _processcontrolcolor?: string | undefined;
    private _selectedlinkeffect?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _theme_AsyncOperations?: Asyncoperation[] | undefined;
    private _theme_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _theme_ProcessSession?: Processsession[] | undefined;
    private _themeid?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _type?: boolean | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
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
     * Gets the _logoid_value property value. 
     * @returns a string
     */
    public get _logoid_value() {
        return this.__logoid_value;
    };
    /**
     * Sets the _logoid_value property value. 
     * @param value Value to set for the _logoid_value property.
     */
    public set _logoid_value(value: string | undefined) {
        this.__logoid_value = value;
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
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
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
     * Gets the accentcolor property value. 
     * @returns a string
     */
    public get accentcolor() {
        return this._accentcolor;
    };
    /**
     * Sets the accentcolor property value. 
     * @param value Value to set for the accentcolor property.
     */
    public set accentcolor(value: string | undefined) {
        this._accentcolor = value;
    };
    /**
     * Gets the backgroundcolor property value. 
     * @returns a string
     */
    public get backgroundcolor() {
        return this._backgroundcolor;
    };
    /**
     * Sets the backgroundcolor property value. 
     * @param value Value to set for the backgroundcolor property.
     */
    public set backgroundcolor(value: string | undefined) {
        this._backgroundcolor = value;
    };
    /**
     * Instantiates a new theme and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the controlborder property value. 
     * @returns a string
     */
    public get controlborder() {
        return this._controlborder;
    };
    /**
     * Sets the controlborder property value. 
     * @param value Value to set for the controlborder property.
     */
    public set controlborder(value: string | undefined) {
        this._controlborder = value;
    };
    /**
     * Gets the controlshade property value. 
     * @returns a string
     */
    public get controlshade() {
        return this._controlshade;
    };
    /**
     * Sets the controlshade property value. 
     * @param value Value to set for the controlshade property.
     */
    public set controlshade(value: string | undefined) {
        this._controlshade = value;
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
     * Gets the defaultcustomentitycolor property value. 
     * @returns a string
     */
    public get defaultcustomentitycolor() {
        return this._defaultcustomentitycolor;
    };
    /**
     * Sets the defaultcustomentitycolor property value. 
     * @param value Value to set for the defaultcustomentitycolor property.
     */
    public set defaultcustomentitycolor(value: string | undefined) {
        this._defaultcustomentitycolor = value;
    };
    /**
     * Gets the defaultentitycolor property value. 
     * @returns a string
     */
    public get defaultentitycolor() {
        return this._defaultentitycolor;
    };
    /**
     * Sets the defaultentitycolor property value. 
     * @param value Value to set for the defaultentitycolor property.
     */
    public set defaultentitycolor(value: string | undefined) {
        this._defaultentitycolor = value;
    };
    /**
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Theme)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Theme)._createdonbehalfby_value = n.getStringValue(); },
            "_logoid_value": (o, n) => { (o as unknown as Theme)._logoid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Theme)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Theme)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Theme)._organizationid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Theme)._transactioncurrencyid_value = n.getStringValue(); },
            "accentcolor": (o, n) => { (o as unknown as Theme).accentcolor = n.getStringValue(); },
            "backgroundcolor": (o, n) => { (o as unknown as Theme).backgroundcolor = n.getStringValue(); },
            "controlborder": (o, n) => { (o as unknown as Theme).controlborder = n.getStringValue(); },
            "controlshade": (o, n) => { (o as unknown as Theme).controlshade = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Theme).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Theme).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Theme).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "defaultcustomentitycolor": (o, n) => { (o as unknown as Theme).defaultcustomentitycolor = n.getStringValue(); },
            "defaultentitycolor": (o, n) => { (o as unknown as Theme).defaultentitycolor = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Theme).exchangerate = n.getNumberValue(); },
            "globallinkcolor": (o, n) => { (o as unknown as Theme).globallinkcolor = n.getStringValue(); },
            "headercolor": (o, n) => { (o as unknown as Theme).headercolor = n.getStringValue(); },
            "hoverlinkeffect": (o, n) => { (o as unknown as Theme).hoverlinkeffect = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Theme).importsequencenumber = n.getNumberValue(); },
            "isdefaulttheme": (o, n) => { (o as unknown as Theme).isdefaulttheme = n.getBooleanValue(); },
            "logoimage": (o, n) => { (o as unknown as Theme).logoimage = n.getObjectValue<Webresource>(createWebresourceFromDiscriminatorValue); },
            "logotooltip": (o, n) => { (o as unknown as Theme).logotooltip = n.getStringValue(); },
            "maincolor": (o, n) => { (o as unknown as Theme).maincolor = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Theme).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Theme).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Theme).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Theme).name = n.getStringValue(); },
            "navbarbackgroundcolor": (o, n) => { (o as unknown as Theme).navbarbackgroundcolor = n.getStringValue(); },
            "navbarshelfcolor": (o, n) => { (o as unknown as Theme).navbarshelfcolor = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Theme).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Theme).overriddencreatedon = n.getDateValue(); },
            "pageheaderbackgroundcolor": (o, n) => { (o as unknown as Theme).pageheaderbackgroundcolor = n.getStringValue(); },
            "panelheaderbackgroundcolor": (o, n) => { (o as unknown as Theme).panelheaderbackgroundcolor = n.getStringValue(); },
            "processcontrolcolor": (o, n) => { (o as unknown as Theme).processcontrolcolor = n.getStringValue(); },
            "selectedlinkeffect": (o, n) => { (o as unknown as Theme).selectedlinkeffect = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Theme).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Theme).statuscode = n.getNumberValue(); },
            "theme_AsyncOperations": (o, n) => { (o as unknown as Theme).theme_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "theme_BulkDeleteFailures": (o, n) => { (o as unknown as Theme).theme_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "theme_ProcessSession": (o, n) => { (o as unknown as Theme).theme_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "themeid": (o, n) => { (o as unknown as Theme).themeid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Theme).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Theme).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "type": (o, n) => { (o as unknown as Theme).type = n.getBooleanValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Theme).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Theme).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the globallinkcolor property value. 
     * @returns a string
     */
    public get globallinkcolor() {
        return this._globallinkcolor;
    };
    /**
     * Sets the globallinkcolor property value. 
     * @param value Value to set for the globallinkcolor property.
     */
    public set globallinkcolor(value: string | undefined) {
        this._globallinkcolor = value;
    };
    /**
     * Gets the headercolor property value. 
     * @returns a string
     */
    public get headercolor() {
        return this._headercolor;
    };
    /**
     * Sets the headercolor property value. 
     * @param value Value to set for the headercolor property.
     */
    public set headercolor(value: string | undefined) {
        this._headercolor = value;
    };
    /**
     * Gets the hoverlinkeffect property value. 
     * @returns a string
     */
    public get hoverlinkeffect() {
        return this._hoverlinkeffect;
    };
    /**
     * Sets the hoverlinkeffect property value. 
     * @param value Value to set for the hoverlinkeffect property.
     */
    public set hoverlinkeffect(value: string | undefined) {
        this._hoverlinkeffect = value;
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the isdefaulttheme property value. 
     * @returns a boolean
     */
    public get isdefaulttheme() {
        return this._isdefaulttheme;
    };
    /**
     * Sets the isdefaulttheme property value. 
     * @param value Value to set for the isdefaulttheme property.
     */
    public set isdefaulttheme(value: boolean | undefined) {
        this._isdefaulttheme = value;
    };
    /**
     * Gets the logoimage property value. 
     * @returns a webresource
     */
    public get logoimage() {
        return this._logoimage;
    };
    /**
     * Sets the logoimage property value. 
     * @param value Value to set for the logoimage property.
     */
    public set logoimage(value: Webresource | undefined) {
        this._logoimage = value;
    };
    /**
     * Gets the logotooltip property value. 
     * @returns a string
     */
    public get logotooltip() {
        return this._logotooltip;
    };
    /**
     * Sets the logotooltip property value. 
     * @param value Value to set for the logotooltip property.
     */
    public set logotooltip(value: string | undefined) {
        this._logotooltip = value;
    };
    /**
     * Gets the maincolor property value. 
     * @returns a string
     */
    public get maincolor() {
        return this._maincolor;
    };
    /**
     * Sets the maincolor property value. 
     * @param value Value to set for the maincolor property.
     */
    public set maincolor(value: string | undefined) {
        this._maincolor = value;
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
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the navbarbackgroundcolor property value. 
     * @returns a string
     */
    public get navbarbackgroundcolor() {
        return this._navbarbackgroundcolor;
    };
    /**
     * Sets the navbarbackgroundcolor property value. 
     * @param value Value to set for the navbarbackgroundcolor property.
     */
    public set navbarbackgroundcolor(value: string | undefined) {
        this._navbarbackgroundcolor = value;
    };
    /**
     * Gets the navbarshelfcolor property value. 
     * @returns a string
     */
    public get navbarshelfcolor() {
        return this._navbarshelfcolor;
    };
    /**
     * Sets the navbarshelfcolor property value. 
     * @param value Value to set for the navbarshelfcolor property.
     */
    public set navbarshelfcolor(value: string | undefined) {
        this._navbarshelfcolor = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the pageheaderbackgroundcolor property value. 
     * @returns a string
     */
    public get pageheaderbackgroundcolor() {
        return this._pageheaderbackgroundcolor;
    };
    /**
     * Sets the pageheaderbackgroundcolor property value. 
     * @param value Value to set for the pageheaderbackgroundcolor property.
     */
    public set pageheaderbackgroundcolor(value: string | undefined) {
        this._pageheaderbackgroundcolor = value;
    };
    /**
     * Gets the panelheaderbackgroundcolor property value. 
     * @returns a string
     */
    public get panelheaderbackgroundcolor() {
        return this._panelheaderbackgroundcolor;
    };
    /**
     * Sets the panelheaderbackgroundcolor property value. 
     * @param value Value to set for the panelheaderbackgroundcolor property.
     */
    public set panelheaderbackgroundcolor(value: string | undefined) {
        this._panelheaderbackgroundcolor = value;
    };
    /**
     * Gets the processcontrolcolor property value. 
     * @returns a string
     */
    public get processcontrolcolor() {
        return this._processcontrolcolor;
    };
    /**
     * Sets the processcontrolcolor property value. 
     * @param value Value to set for the processcontrolcolor property.
     */
    public set processcontrolcolor(value: string | undefined) {
        this._processcontrolcolor = value;
    };
    /**
     * Gets the selectedlinkeffect property value. 
     * @returns a string
     */
    public get selectedlinkeffect() {
        return this._selectedlinkeffect;
    };
    /**
     * Sets the selectedlinkeffect property value. 
     * @param value Value to set for the selectedlinkeffect property.
     */
    public set selectedlinkeffect(value: string | undefined) {
        this._selectedlinkeffect = value;
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
        writer.writeStringValue("_logoid_value", this._logoid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeStringValue("accentcolor", this.accentcolor);
        writer.writeStringValue("backgroundcolor", this.backgroundcolor);
        writer.writeStringValue("controlborder", this.controlborder);
        writer.writeStringValue("controlshade", this.controlshade);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("defaultcustomentitycolor", this.defaultcustomentitycolor);
        writer.writeStringValue("defaultentitycolor", this.defaultentitycolor);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeStringValue("globallinkcolor", this.globallinkcolor);
        writer.writeStringValue("headercolor", this.headercolor);
        writer.writeStringValue("hoverlinkeffect", this.hoverlinkeffect);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeBooleanValue("isdefaulttheme", this.isdefaulttheme);
        writer.writeObjectValue<Webresource>("logoimage", this.logoimage);
        writer.writeStringValue("logotooltip", this.logotooltip);
        writer.writeStringValue("maincolor", this.maincolor);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("navbarbackgroundcolor", this.navbarbackgroundcolor);
        writer.writeStringValue("navbarshelfcolor", this.navbarshelfcolor);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeStringValue("pageheaderbackgroundcolor", this.pageheaderbackgroundcolor);
        writer.writeStringValue("panelheaderbackgroundcolor", this.panelheaderbackgroundcolor);
        writer.writeStringValue("processcontrolcolor", this.processcontrolcolor);
        writer.writeStringValue("selectedlinkeffect", this.selectedlinkeffect);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeCollectionOfObjectValues<Asyncoperation>("theme_AsyncOperations", this.theme_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("theme_BulkDeleteFailures", this.theme_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Processsession>("theme_ProcessSession", this.theme_ProcessSession);
        writer.writeStringValue("themeid", this.themeid);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeBooleanValue("type", this.type);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the theme_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get theme_AsyncOperations() {
        return this._theme_AsyncOperations;
    };
    /**
     * Sets the theme_AsyncOperations property value. 
     * @param value Value to set for the theme_AsyncOperations property.
     */
    public set theme_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._theme_AsyncOperations = value;
    };
    /**
     * Gets the theme_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get theme_BulkDeleteFailures() {
        return this._theme_BulkDeleteFailures;
    };
    /**
     * Sets the theme_BulkDeleteFailures property value. 
     * @param value Value to set for the theme_BulkDeleteFailures property.
     */
    public set theme_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._theme_BulkDeleteFailures = value;
    };
    /**
     * Gets the theme_ProcessSession property value. 
     * @returns a processsession
     */
    public get theme_ProcessSession() {
        return this._theme_ProcessSession;
    };
    /**
     * Sets the theme_ProcessSession property value. 
     * @param value Value to set for the theme_ProcessSession property.
     */
    public set theme_ProcessSession(value: Processsession[] | undefined) {
        this._theme_ProcessSession = value;
    };
    /**
     * Gets the themeid property value. 
     * @returns a string
     */
    public get themeid() {
        return this._themeid;
    };
    /**
     * Sets the themeid property value. 
     * @param value Value to set for the themeid property.
     */
    public set themeid(value: string | undefined) {
        this._themeid = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
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
     * Gets the type property value. 
     * @returns a boolean
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: boolean | undefined) {
        this._type = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
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
}
