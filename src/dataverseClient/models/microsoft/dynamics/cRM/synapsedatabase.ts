import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDatalakefolderFromDiscriminatorValue} from './createDatalakefolderFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Datalakefolder, Duplicaterecord, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Synapsedatabase extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __datalakefolder_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _databasename?: string | undefined;
    private _datalakefolder?: Datalakefolder | undefined;
    private _developmentendpoint?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _resourcegroup?: string | undefined;
    private _schemaprefix?: string | undefined;
    private _serverlesssqlendpoint?: string | undefined;
    private _solutionid?: string | undefined;
    private _sparkpoolconfig?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _subscription?: string | undefined;
    private _synapsedatabase_AsyncOperations?: Asyncoperation[] | undefined;
    private _synapsedatabase_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _synapsedatabase_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _synapsedatabase_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _synapsedatabase_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _synapsedatabase_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _synapsedatabase_ProcessSession?: Processsession[] | undefined;
    private _synapsedatabase_SyncErrors?: Syncerror[] | undefined;
    private _synapsedatabaseid?: string | undefined;
    private _tenant?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _uniquename?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    private _workspacename?: string | undefined;
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
     * Gets the _datalakefolder_value property value. 
     * @returns a string
     */
    public get _datalakefolder_value() {
        return this.__datalakefolder_value;
    };
    /**
     * Sets the _datalakefolder_value property value. 
     * @param value Value to set for the _datalakefolder_value property.
     */
    public set _datalakefolder_value(value: string | undefined) {
        this.__datalakefolder_value = value;
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
     * Gets the componentidunique property value. 
     * @returns a string
     */
    public get componentidunique() {
        return this._componentidunique;
    };
    /**
     * Sets the componentidunique property value. 
     * @param value Value to set for the componentidunique property.
     */
    public set componentidunique(value: string | undefined) {
        this._componentidunique = value;
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
     * Instantiates a new synapsedatabase and sets the default values.
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
     * Gets the databasename property value. 
     * @returns a string
     */
    public get databasename() {
        return this._databasename;
    };
    /**
     * Sets the databasename property value. 
     * @param value Value to set for the databasename property.
     */
    public set databasename(value: string | undefined) {
        this._databasename = value;
    };
    /**
     * Gets the datalakefolder property value. 
     * @returns a datalakefolder
     */
    public get datalakefolder() {
        return this._datalakefolder;
    };
    /**
     * Sets the datalakefolder property value. 
     * @param value Value to set for the datalakefolder property.
     */
    public set datalakefolder(value: Datalakefolder | undefined) {
        this._datalakefolder = value;
    };
    /**
     * Gets the developmentendpoint property value. 
     * @returns a string
     */
    public get developmentendpoint() {
        return this._developmentendpoint;
    };
    /**
     * Sets the developmentendpoint property value. 
     * @param value Value to set for the developmentendpoint property.
     */
    public set developmentendpoint(value: string | undefined) {
        this._developmentendpoint = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Synapsedatabase)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Synapsedatabase)._createdonbehalfby_value = n.getStringValue(); },
            "_datalakefolder_value": (o, n) => { (o as unknown as Synapsedatabase)._datalakefolder_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Synapsedatabase)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Synapsedatabase)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Synapsedatabase)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Synapsedatabase)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Synapsedatabase)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Synapsedatabase)._owninguser_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Synapsedatabase).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Synapsedatabase).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Synapsedatabase).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Synapsedatabase).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Synapsedatabase).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "databasename": (o, n) => { (o as unknown as Synapsedatabase).databasename = n.getStringValue(); },
            "datalakefolder": (o, n) => { (o as unknown as Synapsedatabase).datalakefolder = n.getObjectValue<Datalakefolder>(createDatalakefolderFromDiscriminatorValue); },
            "developmentendpoint": (o, n) => { (o as unknown as Synapsedatabase).developmentendpoint = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Synapsedatabase).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Synapsedatabase).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Synapsedatabase).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Synapsedatabase).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Synapsedatabase).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Synapsedatabase).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Synapsedatabase).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Synapsedatabase).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Synapsedatabase).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Synapsedatabase).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Synapsedatabase).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Synapsedatabase).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Synapsedatabase).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "resourcegroup": (o, n) => { (o as unknown as Synapsedatabase).resourcegroup = n.getStringValue(); },
            "schemaprefix": (o, n) => { (o as unknown as Synapsedatabase).schemaprefix = n.getStringValue(); },
            "serverlesssqlendpoint": (o, n) => { (o as unknown as Synapsedatabase).serverlesssqlendpoint = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Synapsedatabase).solutionid = n.getStringValue(); },
            "sparkpoolconfig": (o, n) => { (o as unknown as Synapsedatabase).sparkpoolconfig = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Synapsedatabase).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Synapsedatabase).statuscode = n.getNumberValue(); },
            "subscription": (o, n) => { (o as unknown as Synapsedatabase).subscription = n.getStringValue(); },
            "synapsedatabase_AsyncOperations": (o, n) => { (o as unknown as Synapsedatabase).synapsedatabase_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "synapsedatabase_BulkDeleteFailures": (o, n) => { (o as unknown as Synapsedatabase).synapsedatabase_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "synapsedatabase_DuplicateBaseRecord": (o, n) => { (o as unknown as Synapsedatabase).synapsedatabase_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "synapsedatabase_DuplicateMatchingRecord": (o, n) => { (o as unknown as Synapsedatabase).synapsedatabase_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "synapsedatabase_MailboxTrackingFolders": (o, n) => { (o as unknown as Synapsedatabase).synapsedatabase_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "synapsedatabase_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Synapsedatabase).synapsedatabase_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "synapsedatabase_ProcessSession": (o, n) => { (o as unknown as Synapsedatabase).synapsedatabase_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "synapsedatabase_SyncErrors": (o, n) => { (o as unknown as Synapsedatabase).synapsedatabase_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "synapsedatabaseid": (o, n) => { (o as unknown as Synapsedatabase).synapsedatabaseid = n.getStringValue(); },
            "tenant": (o, n) => { (o as unknown as Synapsedatabase).tenant = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Synapsedatabase).timezoneruleversionnumber = n.getNumberValue(); },
            "uniquename": (o, n) => { (o as unknown as Synapsedatabase).uniquename = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Synapsedatabase).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Synapsedatabase).versionnumber = n.getNumberValue(); },
            "workspacename": (o, n) => { (o as unknown as Synapsedatabase).workspacename = n.getStringValue(); },
        };
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
     * Gets the resourcegroup property value. 
     * @returns a string
     */
    public get resourcegroup() {
        return this._resourcegroup;
    };
    /**
     * Sets the resourcegroup property value. 
     * @param value Value to set for the resourcegroup property.
     */
    public set resourcegroup(value: string | undefined) {
        this._resourcegroup = value;
    };
    /**
     * Gets the schemaprefix property value. 
     * @returns a string
     */
    public get schemaprefix() {
        return this._schemaprefix;
    };
    /**
     * Sets the schemaprefix property value. 
     * @param value Value to set for the schemaprefix property.
     */
    public set schemaprefix(value: string | undefined) {
        this._schemaprefix = value;
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
        writer.writeStringValue("_datalakefolder_value", this._datalakefolder_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("databasename", this.databasename);
        writer.writeObjectValue<Datalakefolder>("datalakefolder", this.datalakefolder);
        writer.writeStringValue("developmentendpoint", this.developmentendpoint);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("resourcegroup", this.resourcegroup);
        writer.writeStringValue("schemaprefix", this.schemaprefix);
        writer.writeStringValue("serverlesssqlendpoint", this.serverlesssqlendpoint);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeStringValue("sparkpoolconfig", this.sparkpoolconfig);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeStringValue("subscription", this.subscription);
        writer.writeCollectionOfObjectValues<Asyncoperation>("synapsedatabase_AsyncOperations", this.synapsedatabase_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("synapsedatabase_BulkDeleteFailures", this.synapsedatabase_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("synapsedatabase_DuplicateBaseRecord", this.synapsedatabase_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("synapsedatabase_DuplicateMatchingRecord", this.synapsedatabase_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("synapsedatabase_MailboxTrackingFolders", this.synapsedatabase_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("synapsedatabase_PrincipalObjectAttributeAccesses", this.synapsedatabase_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("synapsedatabase_ProcessSession", this.synapsedatabase_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("synapsedatabase_SyncErrors", this.synapsedatabase_SyncErrors);
        writer.writeStringValue("synapsedatabaseid", this.synapsedatabaseid);
        writer.writeStringValue("tenant", this.tenant);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("uniquename", this.uniquename);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeStringValue("workspacename", this.workspacename);
    };
    /**
     * Gets the serverlesssqlendpoint property value. 
     * @returns a string
     */
    public get serverlesssqlendpoint() {
        return this._serverlesssqlendpoint;
    };
    /**
     * Sets the serverlesssqlendpoint property value. 
     * @param value Value to set for the serverlesssqlendpoint property.
     */
    public set serverlesssqlendpoint(value: string | undefined) {
        this._serverlesssqlendpoint = value;
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
     * Gets the sparkpoolconfig property value. 
     * @returns a string
     */
    public get sparkpoolconfig() {
        return this._sparkpoolconfig;
    };
    /**
     * Sets the sparkpoolconfig property value. 
     * @param value Value to set for the sparkpoolconfig property.
     */
    public set sparkpoolconfig(value: string | undefined) {
        this._sparkpoolconfig = value;
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
     * Gets the subscription property value. 
     * @returns a string
     */
    public get subscription() {
        return this._subscription;
    };
    /**
     * Sets the subscription property value. 
     * @param value Value to set for the subscription property.
     */
    public set subscription(value: string | undefined) {
        this._subscription = value;
    };
    /**
     * Gets the synapsedatabase_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get synapsedatabase_AsyncOperations() {
        return this._synapsedatabase_AsyncOperations;
    };
    /**
     * Sets the synapsedatabase_AsyncOperations property value. 
     * @param value Value to set for the synapsedatabase_AsyncOperations property.
     */
    public set synapsedatabase_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._synapsedatabase_AsyncOperations = value;
    };
    /**
     * Gets the synapsedatabase_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get synapsedatabase_BulkDeleteFailures() {
        return this._synapsedatabase_BulkDeleteFailures;
    };
    /**
     * Sets the synapsedatabase_BulkDeleteFailures property value. 
     * @param value Value to set for the synapsedatabase_BulkDeleteFailures property.
     */
    public set synapsedatabase_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._synapsedatabase_BulkDeleteFailures = value;
    };
    /**
     * Gets the synapsedatabase_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get synapsedatabase_DuplicateBaseRecord() {
        return this._synapsedatabase_DuplicateBaseRecord;
    };
    /**
     * Sets the synapsedatabase_DuplicateBaseRecord property value. 
     * @param value Value to set for the synapsedatabase_DuplicateBaseRecord property.
     */
    public set synapsedatabase_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._synapsedatabase_DuplicateBaseRecord = value;
    };
    /**
     * Gets the synapsedatabase_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get synapsedatabase_DuplicateMatchingRecord() {
        return this._synapsedatabase_DuplicateMatchingRecord;
    };
    /**
     * Sets the synapsedatabase_DuplicateMatchingRecord property value. 
     * @param value Value to set for the synapsedatabase_DuplicateMatchingRecord property.
     */
    public set synapsedatabase_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._synapsedatabase_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the synapsedatabase_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get synapsedatabase_MailboxTrackingFolders() {
        return this._synapsedatabase_MailboxTrackingFolders;
    };
    /**
     * Sets the synapsedatabase_MailboxTrackingFolders property value. 
     * @param value Value to set for the synapsedatabase_MailboxTrackingFolders property.
     */
    public set synapsedatabase_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._synapsedatabase_MailboxTrackingFolders = value;
    };
    /**
     * Gets the synapsedatabase_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get synapsedatabase_PrincipalObjectAttributeAccesses() {
        return this._synapsedatabase_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the synapsedatabase_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the synapsedatabase_PrincipalObjectAttributeAccesses property.
     */
    public set synapsedatabase_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._synapsedatabase_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the synapsedatabase_ProcessSession property value. 
     * @returns a processsession
     */
    public get synapsedatabase_ProcessSession() {
        return this._synapsedatabase_ProcessSession;
    };
    /**
     * Sets the synapsedatabase_ProcessSession property value. 
     * @param value Value to set for the synapsedatabase_ProcessSession property.
     */
    public set synapsedatabase_ProcessSession(value: Processsession[] | undefined) {
        this._synapsedatabase_ProcessSession = value;
    };
    /**
     * Gets the synapsedatabase_SyncErrors property value. 
     * @returns a syncerror
     */
    public get synapsedatabase_SyncErrors() {
        return this._synapsedatabase_SyncErrors;
    };
    /**
     * Sets the synapsedatabase_SyncErrors property value. 
     * @param value Value to set for the synapsedatabase_SyncErrors property.
     */
    public set synapsedatabase_SyncErrors(value: Syncerror[] | undefined) {
        this._synapsedatabase_SyncErrors = value;
    };
    /**
     * Gets the synapsedatabaseid property value. 
     * @returns a string
     */
    public get synapsedatabaseid() {
        return this._synapsedatabaseid;
    };
    /**
     * Sets the synapsedatabaseid property value. 
     * @param value Value to set for the synapsedatabaseid property.
     */
    public set synapsedatabaseid(value: string | undefined) {
        this._synapsedatabaseid = value;
    };
    /**
     * Gets the tenant property value. 
     * @returns a string
     */
    public get tenant() {
        return this._tenant;
    };
    /**
     * Sets the tenant property value. 
     * @param value Value to set for the tenant property.
     */
    public set tenant(value: string | undefined) {
        this._tenant = value;
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
     * Gets the uniquename property value. 
     * @returns a string
     */
    public get uniquename() {
        return this._uniquename;
    };
    /**
     * Sets the uniquename property value. 
     * @param value Value to set for the uniquename property.
     */
    public set uniquename(value: string | undefined) {
        this._uniquename = value;
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
    /**
     * Gets the workspacename property value. 
     * @returns a string
     */
    public get workspacename() {
        return this._workspacename;
    };
    /**
     * Sets the workspacename property value. 
     * @param value Value to set for the workspacename property.
     */
    public set workspacename(value: string | undefined) {
        this._workspacename = value;
    };
}
