import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_salesassignmentsetting extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_customownerfield?: string | undefined;
    private _msdyn_defaultcapacity?: number | undefined;
    private _msdyn_enabledtime?: Date | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_opportunityroutingenabled?: boolean | undefined;
    private _msdyn_salesassignmentsetting_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_salesassignmentsetting_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_salesassignmentsetting_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_salesassignmentsetting_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_salesassignmentsetting_ProcessSession?: Processsession[] | undefined;
    private _msdyn_salesassignmentsetting_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_salesassignmentsettingid?: string | undefined;
    private _msdyn_verboselogging?: boolean | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
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
     * Instantiates a new msdyn_salesassignmentsetting and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_customownerfield": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).msdyn_customownerfield = n.getStringValue(); },
            "msdyn_defaultcapacity": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).msdyn_defaultcapacity = n.getNumberValue(); },
            "msdyn_enabledtime": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).msdyn_enabledtime = n.getDateValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).msdyn_name = n.getStringValue(); },
            "msdyn_opportunityroutingenabled": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).msdyn_opportunityroutingenabled = n.getBooleanValue(); },
            "msdyn_salesassignmentsetting_AsyncOperations": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).msdyn_salesassignmentsetting_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_salesassignmentsetting_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).msdyn_salesassignmentsetting_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_salesassignmentsetting_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).msdyn_salesassignmentsetting_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_salesassignmentsetting_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).msdyn_salesassignmentsetting_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_salesassignmentsetting_ProcessSession": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).msdyn_salesassignmentsetting_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_salesassignmentsetting_SyncErrors": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).msdyn_salesassignmentsetting_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_salesassignmentsettingid": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).msdyn_salesassignmentsettingid = n.getStringValue(); },
            "msdyn_verboselogging": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).msdyn_verboselogging = n.getBooleanValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_salesassignmentsetting).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_customownerfield property value. 
     * @returns a string
     */
    public get msdyn_customownerfield() {
        return this._msdyn_customownerfield;
    };
    /**
     * Sets the msdyn_customownerfield property value. 
     * @param value Value to set for the msdyn_customownerfield property.
     */
    public set msdyn_customownerfield(value: string | undefined) {
        this._msdyn_customownerfield = value;
    };
    /**
     * Gets the msdyn_defaultcapacity property value. 
     * @returns a integer
     */
    public get msdyn_defaultcapacity() {
        return this._msdyn_defaultcapacity;
    };
    /**
     * Sets the msdyn_defaultcapacity property value. 
     * @param value Value to set for the msdyn_defaultcapacity property.
     */
    public set msdyn_defaultcapacity(value: number | undefined) {
        this._msdyn_defaultcapacity = value;
    };
    /**
     * Gets the msdyn_enabledtime property value. 
     * @returns a Date
     */
    public get msdyn_enabledtime() {
        return this._msdyn_enabledtime;
    };
    /**
     * Sets the msdyn_enabledtime property value. 
     * @param value Value to set for the msdyn_enabledtime property.
     */
    public set msdyn_enabledtime(value: Date | undefined) {
        this._msdyn_enabledtime = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_opportunityroutingenabled property value. 
     * @returns a boolean
     */
    public get msdyn_opportunityroutingenabled() {
        return this._msdyn_opportunityroutingenabled;
    };
    /**
     * Sets the msdyn_opportunityroutingenabled property value. 
     * @param value Value to set for the msdyn_opportunityroutingenabled property.
     */
    public set msdyn_opportunityroutingenabled(value: boolean | undefined) {
        this._msdyn_opportunityroutingenabled = value;
    };
    /**
     * Gets the msdyn_salesassignmentsetting_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_salesassignmentsetting_AsyncOperations() {
        return this._msdyn_salesassignmentsetting_AsyncOperations;
    };
    /**
     * Sets the msdyn_salesassignmentsetting_AsyncOperations property value. 
     * @param value Value to set for the msdyn_salesassignmentsetting_AsyncOperations property.
     */
    public set msdyn_salesassignmentsetting_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_salesassignmentsetting_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_salesassignmentsetting_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_salesassignmentsetting_BulkDeleteFailures() {
        return this._msdyn_salesassignmentsetting_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_salesassignmentsetting_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_salesassignmentsetting_BulkDeleteFailures property.
     */
    public set msdyn_salesassignmentsetting_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_salesassignmentsetting_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_salesassignmentsetting_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_salesassignmentsetting_MailboxTrackingFolders() {
        return this._msdyn_salesassignmentsetting_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_salesassignmentsetting_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_salesassignmentsetting_MailboxTrackingFolders property.
     */
    public set msdyn_salesassignmentsetting_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_salesassignmentsetting_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_salesassignmentsetting_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_salesassignmentsetting_PrincipalObjectAttributeAccesses() {
        return this._msdyn_salesassignmentsetting_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_salesassignmentsetting_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_salesassignmentsetting_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_salesassignmentsetting_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_salesassignmentsetting_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_salesassignmentsetting_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_salesassignmentsetting_ProcessSession() {
        return this._msdyn_salesassignmentsetting_ProcessSession;
    };
    /**
     * Sets the msdyn_salesassignmentsetting_ProcessSession property value. 
     * @param value Value to set for the msdyn_salesassignmentsetting_ProcessSession property.
     */
    public set msdyn_salesassignmentsetting_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_salesassignmentsetting_ProcessSession = value;
    };
    /**
     * Gets the msdyn_salesassignmentsetting_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_salesassignmentsetting_SyncErrors() {
        return this._msdyn_salesassignmentsetting_SyncErrors;
    };
    /**
     * Sets the msdyn_salesassignmentsetting_SyncErrors property value. 
     * @param value Value to set for the msdyn_salesassignmentsetting_SyncErrors property.
     */
    public set msdyn_salesassignmentsetting_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_salesassignmentsetting_SyncErrors = value;
    };
    /**
     * Gets the msdyn_salesassignmentsettingid property value. 
     * @returns a string
     */
    public get msdyn_salesassignmentsettingid() {
        return this._msdyn_salesassignmentsettingid;
    };
    /**
     * Sets the msdyn_salesassignmentsettingid property value. 
     * @param value Value to set for the msdyn_salesassignmentsettingid property.
     */
    public set msdyn_salesassignmentsettingid(value: string | undefined) {
        this._msdyn_salesassignmentsettingid = value;
    };
    /**
     * Gets the msdyn_verboselogging property value. 
     * @returns a boolean
     */
    public get msdyn_verboselogging() {
        return this._msdyn_verboselogging;
    };
    /**
     * Sets the msdyn_verboselogging property value. 
     * @param value Value to set for the msdyn_verboselogging property.
     */
    public set msdyn_verboselogging(value: boolean | undefined) {
        this._msdyn_verboselogging = value;
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
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_customownerfield", this.msdyn_customownerfield);
        writer.writeNumberValue("msdyn_defaultcapacity", this.msdyn_defaultcapacity);
        writer.writeDateValue("msdyn_enabledtime", this.msdyn_enabledtime);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeBooleanValue("msdyn_opportunityroutingenabled", this.msdyn_opportunityroutingenabled);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_salesassignmentsetting_AsyncOperations", this.msdyn_salesassignmentsetting_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_salesassignmentsetting_BulkDeleteFailures", this.msdyn_salesassignmentsetting_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_salesassignmentsetting_MailboxTrackingFolders", this.msdyn_salesassignmentsetting_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_salesassignmentsetting_PrincipalObjectAttributeAccesses", this.msdyn_salesassignmentsetting_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_salesassignmentsetting_ProcessSession", this.msdyn_salesassignmentsetting_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_salesassignmentsetting_SyncErrors", this.msdyn_salesassignmentsetting_SyncErrors);
        writer.writeStringValue("msdyn_salesassignmentsettingid", this.msdyn_salesassignmentsettingid);
        writer.writeBooleanValue("msdyn_verboselogging", this.msdyn_verboselogging);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
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
