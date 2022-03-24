import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMobileofflineprofileitemFromDiscriminatorValue} from './createMobileofflineprofileitemFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Mobileofflineprofileitem, Organization, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Savedquery extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _advancedgroupby?: string | undefined;
    private _canbedeleted?: BooleanManagedProperty | undefined;
    private _columnsetxml?: string | undefined;
    private _componentstate?: number | undefined;
    private _conditionalformatting?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _fetchxml?: string | undefined;
    private _introducedversion?: string | undefined;
    private _iscustom?: boolean | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _isdefault?: boolean | undefined;
    private _ismanaged?: boolean | undefined;
    private _isquickfindquery?: boolean | undefined;
    private _isuserdefined?: boolean | undefined;
    private _layoutjson?: string | undefined;
    private _layoutxml?: string | undefined;
    private _lk_mobileofflineprofileitem_savedquery?: Mobileofflineprofileitem[] | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _offlinesqlquery?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _organizationtaborder?: number | undefined;
    private _overwritetime?: Date | undefined;
    private _queryapi?: string | undefined;
    private _queryappusage?: number | undefined;
    private _querytype?: number | undefined;
    private _returnedtypecode?: string | undefined;
    private _savedQuery_AsyncOperations?: Asyncoperation[] | undefined;
    private _savedQuery_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _savedQuery_SyncErrors?: Syncerror[] | undefined;
    private _savedqueryid?: string | undefined;
    private _savedqueryidunique?: string | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
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
     * Gets the advancedgroupby property value. 
     * @returns a string
     */
    public get advancedgroupby() {
        return this._advancedgroupby;
    };
    /**
     * Sets the advancedgroupby property value. 
     * @param value Value to set for the advancedgroupby property.
     */
    public set advancedgroupby(value: string | undefined) {
        this._advancedgroupby = value;
    };
    /**
     * Gets the canbedeleted property value. 
     * @returns a BooleanManagedProperty
     */
    public get canbedeleted() {
        return this._canbedeleted;
    };
    /**
     * Sets the canbedeleted property value. 
     * @param value Value to set for the canbedeleted property.
     */
    public set canbedeleted(value: BooleanManagedProperty | undefined) {
        this._canbedeleted = value;
    };
    /**
     * Gets the columnsetxml property value. 
     * @returns a string
     */
    public get columnsetxml() {
        return this._columnsetxml;
    };
    /**
     * Sets the columnsetxml property value. 
     * @param value Value to set for the columnsetxml property.
     */
    public set columnsetxml(value: string | undefined) {
        this._columnsetxml = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Gets the conditionalformatting property value. 
     * @returns a string
     */
    public get conditionalformatting() {
        return this._conditionalformatting;
    };
    /**
     * Sets the conditionalformatting property value. 
     * @param value Value to set for the conditionalformatting property.
     */
    public set conditionalformatting(value: string | undefined) {
        this._conditionalformatting = value;
    };
    /**
     * Instantiates a new savedquery and sets the default values.
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
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the fetchxml property value. 
     * @returns a string
     */
    public get fetchxml() {
        return this._fetchxml;
    };
    /**
     * Sets the fetchxml property value. 
     * @param value Value to set for the fetchxml property.
     */
    public set fetchxml(value: string | undefined) {
        this._fetchxml = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Savedquery)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Savedquery)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Savedquery)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Savedquery)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Savedquery)._organizationid_value = n.getStringValue(); },
            "advancedgroupby": (o, n) => { (o as unknown as Savedquery).advancedgroupby = n.getStringValue(); },
            "canbedeleted": (o, n) => { (o as unknown as Savedquery).canbedeleted = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "columnsetxml": (o, n) => { (o as unknown as Savedquery).columnsetxml = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Savedquery).componentstate = n.getNumberValue(); },
            "conditionalformatting": (o, n) => { (o as unknown as Savedquery).conditionalformatting = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Savedquery).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Savedquery).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Savedquery).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Savedquery).description = n.getStringValue(); },
            "fetchxml": (o, n) => { (o as unknown as Savedquery).fetchxml = n.getStringValue(); },
            "introducedversion": (o, n) => { (o as unknown as Savedquery).introducedversion = n.getStringValue(); },
            "iscustom": (o, n) => { (o as unknown as Savedquery).iscustom = n.getBooleanValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Savedquery).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "isdefault": (o, n) => { (o as unknown as Savedquery).isdefault = n.getBooleanValue(); },
            "ismanaged": (o, n) => { (o as unknown as Savedquery).ismanaged = n.getBooleanValue(); },
            "isquickfindquery": (o, n) => { (o as unknown as Savedquery).isquickfindquery = n.getBooleanValue(); },
            "isuserdefined": (o, n) => { (o as unknown as Savedquery).isuserdefined = n.getBooleanValue(); },
            "layoutjson": (o, n) => { (o as unknown as Savedquery).layoutjson = n.getStringValue(); },
            "layoutxml": (o, n) => { (o as unknown as Savedquery).layoutxml = n.getStringValue(); },
            "lk_mobileofflineprofileitem_savedquery": (o, n) => { (o as unknown as Savedquery).lk_mobileofflineprofileitem_savedquery = n.getCollectionOfObjectValues<Mobileofflineprofileitem>(createMobileofflineprofileitemFromDiscriminatorValue); },
            "modifiedby": (o, n) => { (o as unknown as Savedquery).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Savedquery).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Savedquery).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Savedquery).name = n.getStringValue(); },
            "offlinesqlquery": (o, n) => { (o as unknown as Savedquery).offlinesqlquery = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Savedquery).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "organizationtaborder": (o, n) => { (o as unknown as Savedquery).organizationtaborder = n.getNumberValue(); },
            "overwritetime": (o, n) => { (o as unknown as Savedquery).overwritetime = n.getDateValue(); },
            "queryapi": (o, n) => { (o as unknown as Savedquery).queryapi = n.getStringValue(); },
            "queryappusage": (o, n) => { (o as unknown as Savedquery).queryappusage = n.getNumberValue(); },
            "querytype": (o, n) => { (o as unknown as Savedquery).querytype = n.getNumberValue(); },
            "returnedtypecode": (o, n) => { (o as unknown as Savedquery).returnedtypecode = n.getStringValue(); },
            "savedQuery_AsyncOperations": (o, n) => { (o as unknown as Savedquery).savedQuery_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "savedQuery_BulkDeleteFailures": (o, n) => { (o as unknown as Savedquery).savedQuery_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "savedQuery_SyncErrors": (o, n) => { (o as unknown as Savedquery).savedQuery_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "savedqueryid": (o, n) => { (o as unknown as Savedquery).savedqueryid = n.getStringValue(); },
            "savedqueryidunique": (o, n) => { (o as unknown as Savedquery).savedqueryidunique = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Savedquery).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Savedquery).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Savedquery).statuscode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Savedquery).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the introducedversion property value. 
     * @returns a string
     */
    public get introducedversion() {
        return this._introducedversion;
    };
    /**
     * Sets the introducedversion property value. 
     * @param value Value to set for the introducedversion property.
     */
    public set introducedversion(value: string | undefined) {
        this._introducedversion = value;
    };
    /**
     * Gets the iscustom property value. 
     * @returns a boolean
     */
    public get iscustom() {
        return this._iscustom;
    };
    /**
     * Sets the iscustom property value. 
     * @param value Value to set for the iscustom property.
     */
    public set iscustom(value: boolean | undefined) {
        this._iscustom = value;
    };
    /**
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
    };
    /**
     * Gets the isdefault property value. 
     * @returns a boolean
     */
    public get isdefault() {
        return this._isdefault;
    };
    /**
     * Sets the isdefault property value. 
     * @param value Value to set for the isdefault property.
     */
    public set isdefault(value: boolean | undefined) {
        this._isdefault = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
    };
    /**
     * Gets the isquickfindquery property value. 
     * @returns a boolean
     */
    public get isquickfindquery() {
        return this._isquickfindquery;
    };
    /**
     * Sets the isquickfindquery property value. 
     * @param value Value to set for the isquickfindquery property.
     */
    public set isquickfindquery(value: boolean | undefined) {
        this._isquickfindquery = value;
    };
    /**
     * Gets the isuserdefined property value. 
     * @returns a boolean
     */
    public get isuserdefined() {
        return this._isuserdefined;
    };
    /**
     * Sets the isuserdefined property value. 
     * @param value Value to set for the isuserdefined property.
     */
    public set isuserdefined(value: boolean | undefined) {
        this._isuserdefined = value;
    };
    /**
     * Gets the layoutjson property value. 
     * @returns a string
     */
    public get layoutjson() {
        return this._layoutjson;
    };
    /**
     * Sets the layoutjson property value. 
     * @param value Value to set for the layoutjson property.
     */
    public set layoutjson(value: string | undefined) {
        this._layoutjson = value;
    };
    /**
     * Gets the layoutxml property value. 
     * @returns a string
     */
    public get layoutxml() {
        return this._layoutxml;
    };
    /**
     * Sets the layoutxml property value. 
     * @param value Value to set for the layoutxml property.
     */
    public set layoutxml(value: string | undefined) {
        this._layoutxml = value;
    };
    /**
     * Gets the lk_mobileofflineprofileitem_savedquery property value. 
     * @returns a mobileofflineprofileitem
     */
    public get lk_mobileofflineprofileitem_savedquery() {
        return this._lk_mobileofflineprofileitem_savedquery;
    };
    /**
     * Sets the lk_mobileofflineprofileitem_savedquery property value. 
     * @param value Value to set for the lk_mobileofflineprofileitem_savedquery property.
     */
    public set lk_mobileofflineprofileitem_savedquery(value: Mobileofflineprofileitem[] | undefined) {
        this._lk_mobileofflineprofileitem_savedquery = value;
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
     * Gets the offlinesqlquery property value. 
     * @returns a string
     */
    public get offlinesqlquery() {
        return this._offlinesqlquery;
    };
    /**
     * Sets the offlinesqlquery property value. 
     * @param value Value to set for the offlinesqlquery property.
     */
    public set offlinesqlquery(value: string | undefined) {
        this._offlinesqlquery = value;
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
     * Gets the organizationtaborder property value. 
     * @returns a integer
     */
    public get organizationtaborder() {
        return this._organizationtaborder;
    };
    /**
     * Sets the organizationtaborder property value. 
     * @param value Value to set for the organizationtaborder property.
     */
    public set organizationtaborder(value: number | undefined) {
        this._organizationtaborder = value;
    };
    /**
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
    };
    /**
     * Gets the queryapi property value. 
     * @returns a string
     */
    public get queryapi() {
        return this._queryapi;
    };
    /**
     * Sets the queryapi property value. 
     * @param value Value to set for the queryapi property.
     */
    public set queryapi(value: string | undefined) {
        this._queryapi = value;
    };
    /**
     * Gets the queryappusage property value. 
     * @returns a integer
     */
    public get queryappusage() {
        return this._queryappusage;
    };
    /**
     * Sets the queryappusage property value. 
     * @param value Value to set for the queryappusage property.
     */
    public set queryappusage(value: number | undefined) {
        this._queryappusage = value;
    };
    /**
     * Gets the querytype property value. 
     * @returns a integer
     */
    public get querytype() {
        return this._querytype;
    };
    /**
     * Sets the querytype property value. 
     * @param value Value to set for the querytype property.
     */
    public set querytype(value: number | undefined) {
        this._querytype = value;
    };
    /**
     * Gets the returnedtypecode property value. 
     * @returns a string
     */
    public get returnedtypecode() {
        return this._returnedtypecode;
    };
    /**
     * Sets the returnedtypecode property value. 
     * @param value Value to set for the returnedtypecode property.
     */
    public set returnedtypecode(value: string | undefined) {
        this._returnedtypecode = value;
    };
    /**
     * Gets the savedQuery_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get savedQuery_AsyncOperations() {
        return this._savedQuery_AsyncOperations;
    };
    /**
     * Sets the savedQuery_AsyncOperations property value. 
     * @param value Value to set for the SavedQuery_AsyncOperations property.
     */
    public set savedQuery_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._savedQuery_AsyncOperations = value;
    };
    /**
     * Gets the savedQuery_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get savedQuery_BulkDeleteFailures() {
        return this._savedQuery_BulkDeleteFailures;
    };
    /**
     * Sets the savedQuery_BulkDeleteFailures property value. 
     * @param value Value to set for the SavedQuery_BulkDeleteFailures property.
     */
    public set savedQuery_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._savedQuery_BulkDeleteFailures = value;
    };
    /**
     * Gets the savedQuery_SyncErrors property value. 
     * @returns a syncerror
     */
    public get savedQuery_SyncErrors() {
        return this._savedQuery_SyncErrors;
    };
    /**
     * Sets the savedQuery_SyncErrors property value. 
     * @param value Value to set for the SavedQuery_SyncErrors property.
     */
    public set savedQuery_SyncErrors(value: Syncerror[] | undefined) {
        this._savedQuery_SyncErrors = value;
    };
    /**
     * Gets the savedqueryid property value. 
     * @returns a string
     */
    public get savedqueryid() {
        return this._savedqueryid;
    };
    /**
     * Sets the savedqueryid property value. 
     * @param value Value to set for the savedqueryid property.
     */
    public set savedqueryid(value: string | undefined) {
        this._savedqueryid = value;
    };
    /**
     * Gets the savedqueryidunique property value. 
     * @returns a string
     */
    public get savedqueryidunique() {
        return this._savedqueryidunique;
    };
    /**
     * Sets the savedqueryidunique property value. 
     * @param value Value to set for the savedqueryidunique property.
     */
    public set savedqueryidunique(value: string | undefined) {
        this._savedqueryidunique = value;
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
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("advancedgroupby", this.advancedgroupby);
        writer.writeObjectValue<BooleanManagedProperty>("canbedeleted", this.canbedeleted);
        writer.writeStringValue("columnsetxml", this.columnsetxml);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("conditionalformatting", this.conditionalformatting);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("fetchxml", this.fetchxml);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("iscustom", this.iscustom);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("isdefault", this.isdefault);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("isquickfindquery", this.isquickfindquery);
        writer.writeBooleanValue("isuserdefined", this.isuserdefined);
        writer.writeStringValue("layoutjson", this.layoutjson);
        writer.writeStringValue("layoutxml", this.layoutxml);
        writer.writeCollectionOfObjectValues<Mobileofflineprofileitem>("lk_mobileofflineprofileitem_savedquery", this.lk_mobileofflineprofileitem_savedquery);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("offlinesqlquery", this.offlinesqlquery);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeNumberValue("organizationtaborder", this.organizationtaborder);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("queryapi", this.queryapi);
        writer.writeNumberValue("queryappusage", this.queryappusage);
        writer.writeNumberValue("querytype", this.querytype);
        writer.writeStringValue("returnedtypecode", this.returnedtypecode);
        writer.writeCollectionOfObjectValues<Asyncoperation>("savedQuery_AsyncOperations", this.savedQuery_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("savedQuery_BulkDeleteFailures", this.savedQuery_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Syncerror>("savedQuery_SyncErrors", this.savedQuery_SyncErrors);
        writer.writeStringValue("savedqueryid", this.savedqueryid);
        writer.writeStringValue("savedqueryidunique", this.savedqueryidunique);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
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
