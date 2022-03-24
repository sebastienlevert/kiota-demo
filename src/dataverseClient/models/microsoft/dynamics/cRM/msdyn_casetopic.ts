import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_casetopic_incidentFromDiscriminatorValue} from './createMsdyn_casetopic_incidentFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Msdyn_casetopic_incident, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_casetopic extends Crmbaseentity implements Parsable {
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
    private _msdyn_casetopic_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_casetopic_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_casetopic_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_casetopic_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_casetopic_ProcessSession?: Processsession[] | undefined;
    private _msdyn_casetopic_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_casetopicid?: string | undefined;
    private _msdyn_msdyn_casetopic_msdyn_casetopic_incident_casetopicid?: Msdyn_casetopic_incident[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_similarityscore?: number | undefined;
    private _msdyn_topiccounts?: number | undefined;
    private _msdyn_topicdate?: Date | undefined;
    private _msdyn_topicpercentage?: number | undefined;
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
     * Instantiates a new msdyn_casetopic and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_casetopic)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_casetopic)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_casetopic)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_casetopic)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_casetopic)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_casetopic).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_casetopic).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_casetopic).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_casetopic).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_casetopic).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_casetopic).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_casetopic).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_casetopic_AsyncOperations": (o, n) => { (o as unknown as Msdyn_casetopic).msdyn_casetopic_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_casetopic_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_casetopic).msdyn_casetopic_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_casetopic_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_casetopic).msdyn_casetopic_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_casetopic_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_casetopic).msdyn_casetopic_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_casetopic_ProcessSession": (o, n) => { (o as unknown as Msdyn_casetopic).msdyn_casetopic_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_casetopic_SyncErrors": (o, n) => { (o as unknown as Msdyn_casetopic).msdyn_casetopic_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_casetopicid": (o, n) => { (o as unknown as Msdyn_casetopic).msdyn_casetopicid = n.getStringValue(); },
            "msdyn_msdyn_casetopic_msdyn_casetopic_incident_casetopicid": (o, n) => { (o as unknown as Msdyn_casetopic).msdyn_msdyn_casetopic_msdyn_casetopic_incident_casetopicid = n.getCollectionOfObjectValues<Msdyn_casetopic_incident>(createMsdyn_casetopic_incidentFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_casetopic).msdyn_name = n.getStringValue(); },
            "msdyn_similarityscore": (o, n) => { (o as unknown as Msdyn_casetopic).msdyn_similarityscore = n.getNumberValue(); },
            "msdyn_topiccounts": (o, n) => { (o as unknown as Msdyn_casetopic).msdyn_topiccounts = n.getNumberValue(); },
            "msdyn_topicdate": (o, n) => { (o as unknown as Msdyn_casetopic).msdyn_topicdate = n.getDateValue(); },
            "msdyn_topicpercentage": (o, n) => { (o as unknown as Msdyn_casetopic).msdyn_topicpercentage = n.getNumberValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_casetopic).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_casetopic).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_casetopic).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_casetopic).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_casetopic).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_casetopic).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_casetopic).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_casetopic_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_casetopic_AsyncOperations() {
        return this._msdyn_casetopic_AsyncOperations;
    };
    /**
     * Sets the msdyn_casetopic_AsyncOperations property value. 
     * @param value Value to set for the msdyn_casetopic_AsyncOperations property.
     */
    public set msdyn_casetopic_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_casetopic_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_casetopic_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_casetopic_BulkDeleteFailures() {
        return this._msdyn_casetopic_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_casetopic_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_casetopic_BulkDeleteFailures property.
     */
    public set msdyn_casetopic_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_casetopic_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_casetopic_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_casetopic_MailboxTrackingFolders() {
        return this._msdyn_casetopic_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_casetopic_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_casetopic_MailboxTrackingFolders property.
     */
    public set msdyn_casetopic_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_casetopic_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_casetopic_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_casetopic_PrincipalObjectAttributeAccesses() {
        return this._msdyn_casetopic_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_casetopic_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_casetopic_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_casetopic_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_casetopic_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_casetopic_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_casetopic_ProcessSession() {
        return this._msdyn_casetopic_ProcessSession;
    };
    /**
     * Sets the msdyn_casetopic_ProcessSession property value. 
     * @param value Value to set for the msdyn_casetopic_ProcessSession property.
     */
    public set msdyn_casetopic_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_casetopic_ProcessSession = value;
    };
    /**
     * Gets the msdyn_casetopic_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_casetopic_SyncErrors() {
        return this._msdyn_casetopic_SyncErrors;
    };
    /**
     * Sets the msdyn_casetopic_SyncErrors property value. 
     * @param value Value to set for the msdyn_casetopic_SyncErrors property.
     */
    public set msdyn_casetopic_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_casetopic_SyncErrors = value;
    };
    /**
     * Gets the msdyn_casetopicid property value. 
     * @returns a string
     */
    public get msdyn_casetopicid() {
        return this._msdyn_casetopicid;
    };
    /**
     * Sets the msdyn_casetopicid property value. 
     * @param value Value to set for the msdyn_casetopicid property.
     */
    public set msdyn_casetopicid(value: string | undefined) {
        this._msdyn_casetopicid = value;
    };
    /**
     * Gets the msdyn_msdyn_casetopic_msdyn_casetopic_incident_casetopicid property value. 
     * @returns a msdyn_casetopic_incident
     */
    public get msdyn_msdyn_casetopic_msdyn_casetopic_incident_casetopicid() {
        return this._msdyn_msdyn_casetopic_msdyn_casetopic_incident_casetopicid;
    };
    /**
     * Sets the msdyn_msdyn_casetopic_msdyn_casetopic_incident_casetopicid property value. 
     * @param value Value to set for the msdyn_msdyn_casetopic_msdyn_casetopic_incident_casetopicid property.
     */
    public set msdyn_msdyn_casetopic_msdyn_casetopic_incident_casetopicid(value: Msdyn_casetopic_incident[] | undefined) {
        this._msdyn_msdyn_casetopic_msdyn_casetopic_incident_casetopicid = value;
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
     * Gets the msdyn_similarityscore property value. 
     * @returns a int64
     */
    public get msdyn_similarityscore() {
        return this._msdyn_similarityscore;
    };
    /**
     * Sets the msdyn_similarityscore property value. 
     * @param value Value to set for the msdyn_similarityscore property.
     */
    public set msdyn_similarityscore(value: number | undefined) {
        this._msdyn_similarityscore = value;
    };
    /**
     * Gets the msdyn_topiccounts property value. 
     * @returns a integer
     */
    public get msdyn_topiccounts() {
        return this._msdyn_topiccounts;
    };
    /**
     * Sets the msdyn_topiccounts property value. 
     * @param value Value to set for the msdyn_topiccounts property.
     */
    public set msdyn_topiccounts(value: number | undefined) {
        this._msdyn_topiccounts = value;
    };
    /**
     * Gets the msdyn_topicdate property value. 
     * @returns a Date
     */
    public get msdyn_topicdate() {
        return this._msdyn_topicdate;
    };
    /**
     * Sets the msdyn_topicdate property value. 
     * @param value Value to set for the msdyn_topicdate property.
     */
    public set msdyn_topicdate(value: Date | undefined) {
        this._msdyn_topicdate = value;
    };
    /**
     * Gets the msdyn_topicpercentage property value. 
     * @returns a int64
     */
    public get msdyn_topicpercentage() {
        return this._msdyn_topicpercentage;
    };
    /**
     * Sets the msdyn_topicpercentage property value. 
     * @param value Value to set for the msdyn_topicpercentage property.
     */
    public set msdyn_topicpercentage(value: number | undefined) {
        this._msdyn_topicpercentage = value;
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
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_casetopic_AsyncOperations", this.msdyn_casetopic_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_casetopic_BulkDeleteFailures", this.msdyn_casetopic_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_casetopic_MailboxTrackingFolders", this.msdyn_casetopic_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_casetopic_PrincipalObjectAttributeAccesses", this.msdyn_casetopic_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_casetopic_ProcessSession", this.msdyn_casetopic_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_casetopic_SyncErrors", this.msdyn_casetopic_SyncErrors);
        writer.writeStringValue("msdyn_casetopicid", this.msdyn_casetopicid);
        writer.writeCollectionOfObjectValues<Msdyn_casetopic_incident>("msdyn_msdyn_casetopic_msdyn_casetopic_incident_casetopicid", this.msdyn_msdyn_casetopic_msdyn_casetopic_incident_casetopicid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_similarityscore", this.msdyn_similarityscore);
        writer.writeNumberValue("msdyn_topiccounts", this.msdyn_topiccounts);
        writer.writeDateValue("msdyn_topicdate", this.msdyn_topicdate);
        writer.writeNumberValue("msdyn_topicpercentage", this.msdyn_topicpercentage);
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
