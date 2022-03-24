import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Principal, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Userquery extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __parentqueryid_value?: string | undefined;
    private _advancedgroupby?: string | undefined;
    private _columnsetxml?: string | undefined;
    private _conditionalformatting?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _fetchxml?: string | undefined;
    private _layoutjson?: string | undefined;
    private _layoutxml?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _offlinesqlquery?: string | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _querytype?: number | undefined;
    private _returnedtypecode?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _userQuery_AsyncOperations?: Asyncoperation[] | undefined;
    private _userQuery_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _userQuery_SyncErrors?: Syncerror[] | undefined;
    private _userqueryid?: string | undefined;
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
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Gets the _parentqueryid_value property value. 
     * @returns a string
     */
    public get _parentqueryid_value() {
        return this.__parentqueryid_value;
    };
    /**
     * Sets the _parentqueryid_value property value. 
     * @param value Value to set for the _parentqueryid_value property.
     */
    public set _parentqueryid_value(value: string | undefined) {
        this.__parentqueryid_value = value;
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
     * Instantiates a new userquery and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Userquery)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Userquery)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Userquery)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Userquery)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Userquery)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Userquery)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Userquery)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Userquery)._owninguser_value = n.getStringValue(); },
            "_parentqueryid_value": (o, n) => { (o as unknown as Userquery)._parentqueryid_value = n.getStringValue(); },
            "advancedgroupby": (o, n) => { (o as unknown as Userquery).advancedgroupby = n.getStringValue(); },
            "columnsetxml": (o, n) => { (o as unknown as Userquery).columnsetxml = n.getStringValue(); },
            "conditionalformatting": (o, n) => { (o as unknown as Userquery).conditionalformatting = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Userquery).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Userquery).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Userquery).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Userquery).description = n.getStringValue(); },
            "fetchxml": (o, n) => { (o as unknown as Userquery).fetchxml = n.getStringValue(); },
            "layoutjson": (o, n) => { (o as unknown as Userquery).layoutjson = n.getStringValue(); },
            "layoutxml": (o, n) => { (o as unknown as Userquery).layoutxml = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Userquery).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Userquery).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Userquery).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Userquery).name = n.getStringValue(); },
            "offlinesqlquery": (o, n) => { (o as unknown as Userquery).offlinesqlquery = n.getStringValue(); },
            "ownerid": (o, n) => { (o as unknown as Userquery).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Userquery).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Userquery).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Userquery).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "querytype": (o, n) => { (o as unknown as Userquery).querytype = n.getNumberValue(); },
            "returnedtypecode": (o, n) => { (o as unknown as Userquery).returnedtypecode = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Userquery).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Userquery).statuscode = n.getNumberValue(); },
            "userQuery_AsyncOperations": (o, n) => { (o as unknown as Userquery).userQuery_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "userQuery_BulkDeleteFailures": (o, n) => { (o as unknown as Userquery).userQuery_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "userQuery_SyncErrors": (o, n) => { (o as unknown as Userquery).userQuery_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "userqueryid": (o, n) => { (o as unknown as Userquery).userqueryid = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Userquery).versionnumber = n.getNumberValue(); },
        };
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
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
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
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_parentqueryid_value", this._parentqueryid_value);
        writer.writeStringValue("advancedgroupby", this.advancedgroupby);
        writer.writeStringValue("columnsetxml", this.columnsetxml);
        writer.writeStringValue("conditionalformatting", this.conditionalformatting);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("fetchxml", this.fetchxml);
        writer.writeStringValue("layoutjson", this.layoutjson);
        writer.writeStringValue("layoutxml", this.layoutxml);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("offlinesqlquery", this.offlinesqlquery);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("querytype", this.querytype);
        writer.writeStringValue("returnedtypecode", this.returnedtypecode);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeCollectionOfObjectValues<Asyncoperation>("userQuery_AsyncOperations", this.userQuery_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("userQuery_BulkDeleteFailures", this.userQuery_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Syncerror>("userQuery_SyncErrors", this.userQuery_SyncErrors);
        writer.writeStringValue("userqueryid", this.userqueryid);
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
     * Gets the userQuery_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get userQuery_AsyncOperations() {
        return this._userQuery_AsyncOperations;
    };
    /**
     * Sets the userQuery_AsyncOperations property value. 
     * @param value Value to set for the UserQuery_AsyncOperations property.
     */
    public set userQuery_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._userQuery_AsyncOperations = value;
    };
    /**
     * Gets the userQuery_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get userQuery_BulkDeleteFailures() {
        return this._userQuery_BulkDeleteFailures;
    };
    /**
     * Sets the userQuery_BulkDeleteFailures property value. 
     * @param value Value to set for the UserQuery_BulkDeleteFailures property.
     */
    public set userQuery_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._userQuery_BulkDeleteFailures = value;
    };
    /**
     * Gets the userQuery_SyncErrors property value. 
     * @returns a syncerror
     */
    public get userQuery_SyncErrors() {
        return this._userQuery_SyncErrors;
    };
    /**
     * Sets the userQuery_SyncErrors property value. 
     * @param value Value to set for the UserQuery_SyncErrors property.
     */
    public set userQuery_SyncErrors(value: Syncerror[] | undefined) {
        this._userQuery_SyncErrors = value;
    };
    /**
     * Gets the userqueryid property value. 
     * @returns a string
     */
    public get userqueryid() {
        return this._userqueryid;
    };
    /**
     * Sets the userqueryid property value. 
     * @param value Value to set for the userqueryid property.
     */
    public set userqueryid(value: string | undefined) {
        this._userqueryid = value;
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
