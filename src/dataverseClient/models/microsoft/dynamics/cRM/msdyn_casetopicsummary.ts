import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_casetopicsummary extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_casecount?: number | undefined;
    private _msdyn_casecoveragepercentage?: number | undefined;
    private _msdyn_casetopicsummary_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_casetopicsummary_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_casetopicsummary_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_casetopicsummary_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_casetopicsummary_ProcessSession?: Processsession[] | undefined;
    private _msdyn_casetopicsummary_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_casetopicsummaryid?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_refreshtime?: Date | undefined;
    private _msdyn_topiccount?: number | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _solutionid?: string | undefined;
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
     * Instantiates a new msdyn_casetopicsummary and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_casetopicsummary)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_casetopicsummary)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_casetopicsummary)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_casetopicsummary)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_casetopicsummary)._organizationid_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Msdyn_casetopicsummary).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Msdyn_casetopicsummary).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_casetopicsummary).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_casetopicsummary).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_casetopicsummary).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_casetopicsummary).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Msdyn_casetopicsummary).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Msdyn_casetopicsummary).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_casetopicsummary).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_casetopicsummary).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_casetopicsummary).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_casecount": (o, n) => { (o as unknown as Msdyn_casetopicsummary).msdyn_casecount = n.getNumberValue(); },
            "msdyn_casecoveragepercentage": (o, n) => { (o as unknown as Msdyn_casetopicsummary).msdyn_casecoveragepercentage = n.getNumberValue(); },
            "msdyn_casetopicsummary_AsyncOperations": (o, n) => { (o as unknown as Msdyn_casetopicsummary).msdyn_casetopicsummary_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_casetopicsummary_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_casetopicsummary).msdyn_casetopicsummary_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_casetopicsummary_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_casetopicsummary).msdyn_casetopicsummary_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_casetopicsummary_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_casetopicsummary).msdyn_casetopicsummary_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_casetopicsummary_ProcessSession": (o, n) => { (o as unknown as Msdyn_casetopicsummary).msdyn_casetopicsummary_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_casetopicsummary_SyncErrors": (o, n) => { (o as unknown as Msdyn_casetopicsummary).msdyn_casetopicsummary_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_casetopicsummaryid": (o, n) => { (o as unknown as Msdyn_casetopicsummary).msdyn_casetopicsummaryid = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_casetopicsummary).msdyn_name = n.getStringValue(); },
            "msdyn_refreshtime": (o, n) => { (o as unknown as Msdyn_casetopicsummary).msdyn_refreshtime = n.getDateValue(); },
            "msdyn_topiccount": (o, n) => { (o as unknown as Msdyn_casetopicsummary).msdyn_topiccount = n.getNumberValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_casetopicsummary).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_casetopicsummary).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Msdyn_casetopicsummary).overwritetime = n.getDateValue(); },
            "solutionid": (o, n) => { (o as unknown as Msdyn_casetopicsummary).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_casetopicsummary).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_casetopicsummary).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_casetopicsummary).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_casetopicsummary).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_casetopicsummary).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_casecount property value. 
     * @returns a integer
     */
    public get msdyn_casecount() {
        return this._msdyn_casecount;
    };
    /**
     * Sets the msdyn_casecount property value. 
     * @param value Value to set for the msdyn_casecount property.
     */
    public set msdyn_casecount(value: number | undefined) {
        this._msdyn_casecount = value;
    };
    /**
     * Gets the msdyn_casecoveragepercentage property value. 
     * @returns a int64
     */
    public get msdyn_casecoveragepercentage() {
        return this._msdyn_casecoveragepercentage;
    };
    /**
     * Sets the msdyn_casecoveragepercentage property value. 
     * @param value Value to set for the msdyn_casecoveragepercentage property.
     */
    public set msdyn_casecoveragepercentage(value: number | undefined) {
        this._msdyn_casecoveragepercentage = value;
    };
    /**
     * Gets the msdyn_casetopicsummary_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_casetopicsummary_AsyncOperations() {
        return this._msdyn_casetopicsummary_AsyncOperations;
    };
    /**
     * Sets the msdyn_casetopicsummary_AsyncOperations property value. 
     * @param value Value to set for the msdyn_casetopicsummary_AsyncOperations property.
     */
    public set msdyn_casetopicsummary_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_casetopicsummary_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_casetopicsummary_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_casetopicsummary_BulkDeleteFailures() {
        return this._msdyn_casetopicsummary_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_casetopicsummary_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_casetopicsummary_BulkDeleteFailures property.
     */
    public set msdyn_casetopicsummary_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_casetopicsummary_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_casetopicsummary_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_casetopicsummary_MailboxTrackingFolders() {
        return this._msdyn_casetopicsummary_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_casetopicsummary_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_casetopicsummary_MailboxTrackingFolders property.
     */
    public set msdyn_casetopicsummary_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_casetopicsummary_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_casetopicsummary_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_casetopicsummary_PrincipalObjectAttributeAccesses() {
        return this._msdyn_casetopicsummary_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_casetopicsummary_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_casetopicsummary_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_casetopicsummary_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_casetopicsummary_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_casetopicsummary_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_casetopicsummary_ProcessSession() {
        return this._msdyn_casetopicsummary_ProcessSession;
    };
    /**
     * Sets the msdyn_casetopicsummary_ProcessSession property value. 
     * @param value Value to set for the msdyn_casetopicsummary_ProcessSession property.
     */
    public set msdyn_casetopicsummary_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_casetopicsummary_ProcessSession = value;
    };
    /**
     * Gets the msdyn_casetopicsummary_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_casetopicsummary_SyncErrors() {
        return this._msdyn_casetopicsummary_SyncErrors;
    };
    /**
     * Sets the msdyn_casetopicsummary_SyncErrors property value. 
     * @param value Value to set for the msdyn_casetopicsummary_SyncErrors property.
     */
    public set msdyn_casetopicsummary_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_casetopicsummary_SyncErrors = value;
    };
    /**
     * Gets the msdyn_casetopicsummaryid property value. 
     * @returns a string
     */
    public get msdyn_casetopicsummaryid() {
        return this._msdyn_casetopicsummaryid;
    };
    /**
     * Sets the msdyn_casetopicsummaryid property value. 
     * @param value Value to set for the msdyn_casetopicsummaryid property.
     */
    public set msdyn_casetopicsummaryid(value: string | undefined) {
        this._msdyn_casetopicsummaryid = value;
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
     * Gets the msdyn_refreshtime property value. 
     * @returns a Date
     */
    public get msdyn_refreshtime() {
        return this._msdyn_refreshtime;
    };
    /**
     * Sets the msdyn_refreshtime property value. 
     * @param value Value to set for the msdyn_refreshtime property.
     */
    public set msdyn_refreshtime(value: Date | undefined) {
        this._msdyn_refreshtime = value;
    };
    /**
     * Gets the msdyn_topiccount property value. 
     * @returns a integer
     */
    public get msdyn_topiccount() {
        return this._msdyn_topiccount;
    };
    /**
     * Sets the msdyn_topiccount property value. 
     * @param value Value to set for the msdyn_topiccount property.
     */
    public set msdyn_topiccount(value: number | undefined) {
        this._msdyn_topiccount = value;
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
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyn_casecount", this.msdyn_casecount);
        writer.writeNumberValue("msdyn_casecoveragepercentage", this.msdyn_casecoveragepercentage);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_casetopicsummary_AsyncOperations", this.msdyn_casetopicsummary_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_casetopicsummary_BulkDeleteFailures", this.msdyn_casetopicsummary_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_casetopicsummary_MailboxTrackingFolders", this.msdyn_casetopicsummary_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_casetopicsummary_PrincipalObjectAttributeAccesses", this.msdyn_casetopicsummary_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_casetopicsummary_ProcessSession", this.msdyn_casetopicsummary_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_casetopicsummary_SyncErrors", this.msdyn_casetopicsummary_SyncErrors);
        writer.writeStringValue("msdyn_casetopicsummaryid", this.msdyn_casetopicsummaryid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeDateValue("msdyn_refreshtime", this.msdyn_refreshtime);
        writer.writeNumberValue("msdyn_topiccount", this.msdyn_topiccount);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
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
