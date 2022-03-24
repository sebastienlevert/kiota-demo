import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Processstage, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Processstageparameter extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __processstageid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _processStageId?: Processstage | undefined;
    private _processstageparameter_AsyncOperations?: Asyncoperation[] | undefined;
    private _processstageparameter_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _processstageparameter_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _processstageparameter_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _processstageparameter_ProcessSession?: Processsession[] | undefined;
    private _processstageparameter_SyncErrors?: Syncerror[] | undefined;
    private _processstageparameterid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _value?: string | undefined;
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
     * Gets the _processstageid_value property value. 
     * @returns a string
     */
    public get _processstageid_value() {
        return this.__processstageid_value;
    };
    /**
     * Sets the _processstageid_value property value. 
     * @param value Value to set for the _processstageid_value property.
     */
    public set _processstageid_value(value: string | undefined) {
        this.__processstageid_value = value;
    };
    /**
     * Instantiates a new processstageparameter and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Processstageparameter)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Processstageparameter)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Processstageparameter)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Processstageparameter)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Processstageparameter)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Processstageparameter)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Processstageparameter)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Processstageparameter)._owninguser_value = n.getStringValue(); },
            "_processstageid_value": (o, n) => { (o as unknown as Processstageparameter)._processstageid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Processstageparameter).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Processstageparameter).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Processstageparameter).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Processstageparameter).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Processstageparameter).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Processstageparameter).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Processstageparameter).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Processstageparameter).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Processstageparameter).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Processstageparameter).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Processstageparameter).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Processstageparameter).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Processstageparameter).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "processStageId": (o, n) => { (o as unknown as Processstageparameter).processStageId = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "processstageparameter_AsyncOperations": (o, n) => { (o as unknown as Processstageparameter).processstageparameter_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "processstageparameter_BulkDeleteFailures": (o, n) => { (o as unknown as Processstageparameter).processstageparameter_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "processstageparameter_MailboxTrackingFolders": (o, n) => { (o as unknown as Processstageparameter).processstageparameter_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "processstageparameter_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Processstageparameter).processstageparameter_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "processstageparameter_ProcessSession": (o, n) => { (o as unknown as Processstageparameter).processstageparameter_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "processstageparameter_SyncErrors": (o, n) => { (o as unknown as Processstageparameter).processstageparameter_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "processstageparameterid": (o, n) => { (o as unknown as Processstageparameter).processstageparameterid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Processstageparameter).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Processstageparameter).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Processstageparameter).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Processstageparameter).utcconversiontimezonecode = n.getNumberValue(); },
            "value": (o, n) => { (o as unknown as Processstageparameter).value = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Processstageparameter).versionnumber = n.getNumberValue(); },
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
     * Gets the processStageId property value. 
     * @returns a processstage
     */
    public get processStageId() {
        return this._processStageId;
    };
    /**
     * Sets the processStageId property value. 
     * @param value Value to set for the ProcessStageId property.
     */
    public set processStageId(value: Processstage | undefined) {
        this._processStageId = value;
    };
    /**
     * Gets the processstageparameter_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get processstageparameter_AsyncOperations() {
        return this._processstageparameter_AsyncOperations;
    };
    /**
     * Sets the processstageparameter_AsyncOperations property value. 
     * @param value Value to set for the processstageparameter_AsyncOperations property.
     */
    public set processstageparameter_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._processstageparameter_AsyncOperations = value;
    };
    /**
     * Gets the processstageparameter_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get processstageparameter_BulkDeleteFailures() {
        return this._processstageparameter_BulkDeleteFailures;
    };
    /**
     * Sets the processstageparameter_BulkDeleteFailures property value. 
     * @param value Value to set for the processstageparameter_BulkDeleteFailures property.
     */
    public set processstageparameter_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._processstageparameter_BulkDeleteFailures = value;
    };
    /**
     * Gets the processstageparameter_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get processstageparameter_MailboxTrackingFolders() {
        return this._processstageparameter_MailboxTrackingFolders;
    };
    /**
     * Sets the processstageparameter_MailboxTrackingFolders property value. 
     * @param value Value to set for the processstageparameter_MailboxTrackingFolders property.
     */
    public set processstageparameter_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._processstageparameter_MailboxTrackingFolders = value;
    };
    /**
     * Gets the processstageparameter_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get processstageparameter_PrincipalObjectAttributeAccesses() {
        return this._processstageparameter_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the processstageparameter_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the processstageparameter_PrincipalObjectAttributeAccesses property.
     */
    public set processstageparameter_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._processstageparameter_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the processstageparameter_ProcessSession property value. 
     * @returns a processsession
     */
    public get processstageparameter_ProcessSession() {
        return this._processstageparameter_ProcessSession;
    };
    /**
     * Sets the processstageparameter_ProcessSession property value. 
     * @param value Value to set for the processstageparameter_ProcessSession property.
     */
    public set processstageparameter_ProcessSession(value: Processsession[] | undefined) {
        this._processstageparameter_ProcessSession = value;
    };
    /**
     * Gets the processstageparameter_SyncErrors property value. 
     * @returns a syncerror
     */
    public get processstageparameter_SyncErrors() {
        return this._processstageparameter_SyncErrors;
    };
    /**
     * Sets the processstageparameter_SyncErrors property value. 
     * @param value Value to set for the processstageparameter_SyncErrors property.
     */
    public set processstageparameter_SyncErrors(value: Syncerror[] | undefined) {
        this._processstageparameter_SyncErrors = value;
    };
    /**
     * Gets the processstageparameterid property value. 
     * @returns a string
     */
    public get processstageparameterid() {
        return this._processstageparameterid;
    };
    /**
     * Sets the processstageparameterid property value. 
     * @param value Value to set for the processstageparameterid property.
     */
    public set processstageparameterid(value: string | undefined) {
        this._processstageparameterid = value;
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
        writer.writeStringValue("_processstageid_value", this._processstageid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeObjectValue<Processstage>("processStageId", this.processStageId);
        writer.writeCollectionOfObjectValues<Asyncoperation>("processstageparameter_AsyncOperations", this.processstageparameter_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("processstageparameter_BulkDeleteFailures", this.processstageparameter_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("processstageparameter_MailboxTrackingFolders", this.processstageparameter_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("processstageparameter_PrincipalObjectAttributeAccesses", this.processstageparameter_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("processstageparameter_ProcessSession", this.processstageparameter_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("processstageparameter_SyncErrors", this.processstageparameter_SyncErrors);
        writer.writeStringValue("processstageparameterid", this.processstageparameterid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeStringValue("value", this.value);
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
     * Gets the value property value. 
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
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
