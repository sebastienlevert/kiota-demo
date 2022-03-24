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

export class Msdyn_fieldservicesystemjob extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_ownerid_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_conditioncode?: number | undefined;
    private _msdyn_exceptionmessage?: string | undefined;
    private _msdyn_exceptiontrace?: string | undefined;
    private _msdyn_fieldservicesystemjob_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_fieldservicesystemjob_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_fieldservicesystemjob_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_fieldservicesystemjob_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_fieldservicesystemjob_ProcessSession?: Processsession[] | undefined;
    private _msdyn_fieldservicesystemjob_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_fieldservicesystemjobid?: string | undefined;
    private _msdyn_inputparameter?: string | undefined;
    private _msdyn_inputparametertype?: number | undefined;
    private _msdyn_jobname?: string | undefined;
    private _msdyn_jobstatus?: number | undefined;
    private _msdyn_jobtype?: number | undefined;
    private _msdyn_outputparameter?: string | undefined;
    private _msdyn_outputparametertype?: number | undefined;
    private _msdyn_ownerid?: Systemuser | undefined;
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
     * Gets the _msdyn_ownerid_value property value. 
     * @returns a string
     */
    public get _msdyn_ownerid_value() {
        return this.__msdyn_ownerid_value;
    };
    /**
     * Sets the _msdyn_ownerid_value property value. 
     * @param value Value to set for the _msdyn_ownerid_value property.
     */
    public set _msdyn_ownerid_value(value: string | undefined) {
        this.__msdyn_ownerid_value = value;
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
     * Instantiates a new msdyn_fieldservicesystemjob and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_ownerid_value": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob)._msdyn_ownerid_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_conditioncode": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).msdyn_conditioncode = n.getNumberValue(); },
            "msdyn_exceptionmessage": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).msdyn_exceptionmessage = n.getStringValue(); },
            "msdyn_exceptiontrace": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).msdyn_exceptiontrace = n.getStringValue(); },
            "msdyn_fieldservicesystemjob_AsyncOperations": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).msdyn_fieldservicesystemjob_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_fieldservicesystemjob_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).msdyn_fieldservicesystemjob_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_fieldservicesystemjob_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).msdyn_fieldservicesystemjob_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_fieldservicesystemjob_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).msdyn_fieldservicesystemjob_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_fieldservicesystemjob_ProcessSession": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).msdyn_fieldservicesystemjob_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_fieldservicesystemjob_SyncErrors": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).msdyn_fieldservicesystemjob_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_fieldservicesystemjobid": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).msdyn_fieldservicesystemjobid = n.getStringValue(); },
            "msdyn_inputparameter": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).msdyn_inputparameter = n.getStringValue(); },
            "msdyn_inputparametertype": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).msdyn_inputparametertype = n.getNumberValue(); },
            "msdyn_jobname": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).msdyn_jobname = n.getStringValue(); },
            "msdyn_jobstatus": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).msdyn_jobstatus = n.getNumberValue(); },
            "msdyn_jobtype": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).msdyn_jobtype = n.getNumberValue(); },
            "msdyn_outputparameter": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).msdyn_outputparameter = n.getStringValue(); },
            "msdyn_outputparametertype": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).msdyn_outputparametertype = n.getNumberValue(); },
            "msdyn_ownerid": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).msdyn_ownerid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_fieldservicesystemjob).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_conditioncode property value. 
     * @returns a integer
     */
    public get msdyn_conditioncode() {
        return this._msdyn_conditioncode;
    };
    /**
     * Sets the msdyn_conditioncode property value. 
     * @param value Value to set for the msdyn_conditioncode property.
     */
    public set msdyn_conditioncode(value: number | undefined) {
        this._msdyn_conditioncode = value;
    };
    /**
     * Gets the msdyn_exceptionmessage property value. 
     * @returns a string
     */
    public get msdyn_exceptionmessage() {
        return this._msdyn_exceptionmessage;
    };
    /**
     * Sets the msdyn_exceptionmessage property value. 
     * @param value Value to set for the msdyn_exceptionmessage property.
     */
    public set msdyn_exceptionmessage(value: string | undefined) {
        this._msdyn_exceptionmessage = value;
    };
    /**
     * Gets the msdyn_exceptiontrace property value. 
     * @returns a string
     */
    public get msdyn_exceptiontrace() {
        return this._msdyn_exceptiontrace;
    };
    /**
     * Sets the msdyn_exceptiontrace property value. 
     * @param value Value to set for the msdyn_exceptiontrace property.
     */
    public set msdyn_exceptiontrace(value: string | undefined) {
        this._msdyn_exceptiontrace = value;
    };
    /**
     * Gets the msdyn_fieldservicesystemjob_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_fieldservicesystemjob_AsyncOperations() {
        return this._msdyn_fieldservicesystemjob_AsyncOperations;
    };
    /**
     * Sets the msdyn_fieldservicesystemjob_AsyncOperations property value. 
     * @param value Value to set for the msdyn_fieldservicesystemjob_AsyncOperations property.
     */
    public set msdyn_fieldservicesystemjob_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_fieldservicesystemjob_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_fieldservicesystemjob_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_fieldservicesystemjob_BulkDeleteFailures() {
        return this._msdyn_fieldservicesystemjob_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_fieldservicesystemjob_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_fieldservicesystemjob_BulkDeleteFailures property.
     */
    public set msdyn_fieldservicesystemjob_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_fieldservicesystemjob_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_fieldservicesystemjob_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_fieldservicesystemjob_MailboxTrackingFolders() {
        return this._msdyn_fieldservicesystemjob_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_fieldservicesystemjob_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_fieldservicesystemjob_MailboxTrackingFolders property.
     */
    public set msdyn_fieldservicesystemjob_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_fieldservicesystemjob_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_fieldservicesystemjob_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_fieldservicesystemjob_PrincipalObjectAttributeAccesses() {
        return this._msdyn_fieldservicesystemjob_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_fieldservicesystemjob_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_fieldservicesystemjob_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_fieldservicesystemjob_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_fieldservicesystemjob_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_fieldservicesystemjob_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_fieldservicesystemjob_ProcessSession() {
        return this._msdyn_fieldservicesystemjob_ProcessSession;
    };
    /**
     * Sets the msdyn_fieldservicesystemjob_ProcessSession property value. 
     * @param value Value to set for the msdyn_fieldservicesystemjob_ProcessSession property.
     */
    public set msdyn_fieldservicesystemjob_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_fieldservicesystemjob_ProcessSession = value;
    };
    /**
     * Gets the msdyn_fieldservicesystemjob_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_fieldservicesystemjob_SyncErrors() {
        return this._msdyn_fieldservicesystemjob_SyncErrors;
    };
    /**
     * Sets the msdyn_fieldservicesystemjob_SyncErrors property value. 
     * @param value Value to set for the msdyn_fieldservicesystemjob_SyncErrors property.
     */
    public set msdyn_fieldservicesystemjob_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_fieldservicesystemjob_SyncErrors = value;
    };
    /**
     * Gets the msdyn_fieldservicesystemjobid property value. 
     * @returns a string
     */
    public get msdyn_fieldservicesystemjobid() {
        return this._msdyn_fieldservicesystemjobid;
    };
    /**
     * Sets the msdyn_fieldservicesystemjobid property value. 
     * @param value Value to set for the msdyn_fieldservicesystemjobid property.
     */
    public set msdyn_fieldservicesystemjobid(value: string | undefined) {
        this._msdyn_fieldservicesystemjobid = value;
    };
    /**
     * Gets the msdyn_inputparameter property value. 
     * @returns a string
     */
    public get msdyn_inputparameter() {
        return this._msdyn_inputparameter;
    };
    /**
     * Sets the msdyn_inputparameter property value. 
     * @param value Value to set for the msdyn_inputparameter property.
     */
    public set msdyn_inputparameter(value: string | undefined) {
        this._msdyn_inputparameter = value;
    };
    /**
     * Gets the msdyn_inputparametertype property value. 
     * @returns a integer
     */
    public get msdyn_inputparametertype() {
        return this._msdyn_inputparametertype;
    };
    /**
     * Sets the msdyn_inputparametertype property value. 
     * @param value Value to set for the msdyn_inputparametertype property.
     */
    public set msdyn_inputparametertype(value: number | undefined) {
        this._msdyn_inputparametertype = value;
    };
    /**
     * Gets the msdyn_jobname property value. 
     * @returns a string
     */
    public get msdyn_jobname() {
        return this._msdyn_jobname;
    };
    /**
     * Sets the msdyn_jobname property value. 
     * @param value Value to set for the msdyn_jobname property.
     */
    public set msdyn_jobname(value: string | undefined) {
        this._msdyn_jobname = value;
    };
    /**
     * Gets the msdyn_jobstatus property value. 
     * @returns a integer
     */
    public get msdyn_jobstatus() {
        return this._msdyn_jobstatus;
    };
    /**
     * Sets the msdyn_jobstatus property value. 
     * @param value Value to set for the msdyn_jobstatus property.
     */
    public set msdyn_jobstatus(value: number | undefined) {
        this._msdyn_jobstatus = value;
    };
    /**
     * Gets the msdyn_jobtype property value. 
     * @returns a integer
     */
    public get msdyn_jobtype() {
        return this._msdyn_jobtype;
    };
    /**
     * Sets the msdyn_jobtype property value. 
     * @param value Value to set for the msdyn_jobtype property.
     */
    public set msdyn_jobtype(value: number | undefined) {
        this._msdyn_jobtype = value;
    };
    /**
     * Gets the msdyn_outputparameter property value. 
     * @returns a string
     */
    public get msdyn_outputparameter() {
        return this._msdyn_outputparameter;
    };
    /**
     * Sets the msdyn_outputparameter property value. 
     * @param value Value to set for the msdyn_outputparameter property.
     */
    public set msdyn_outputparameter(value: string | undefined) {
        this._msdyn_outputparameter = value;
    };
    /**
     * Gets the msdyn_outputparametertype property value. 
     * @returns a integer
     */
    public get msdyn_outputparametertype() {
        return this._msdyn_outputparametertype;
    };
    /**
     * Sets the msdyn_outputparametertype property value. 
     * @param value Value to set for the msdyn_outputparametertype property.
     */
    public set msdyn_outputparametertype(value: number | undefined) {
        this._msdyn_outputparametertype = value;
    };
    /**
     * Gets the msdyn_ownerid property value. 
     * @returns a systemuser
     */
    public get msdyn_ownerid() {
        return this._msdyn_ownerid;
    };
    /**
     * Sets the msdyn_ownerid property value. 
     * @param value Value to set for the msdyn_ownerid property.
     */
    public set msdyn_ownerid(value: Systemuser | undefined) {
        this._msdyn_ownerid = value;
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
        writer.writeStringValue("_msdyn_ownerid_value", this._msdyn_ownerid_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyn_conditioncode", this.msdyn_conditioncode);
        writer.writeStringValue("msdyn_exceptionmessage", this.msdyn_exceptionmessage);
        writer.writeStringValue("msdyn_exceptiontrace", this.msdyn_exceptiontrace);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_fieldservicesystemjob_AsyncOperations", this.msdyn_fieldservicesystemjob_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_fieldservicesystemjob_BulkDeleteFailures", this.msdyn_fieldservicesystemjob_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_fieldservicesystemjob_MailboxTrackingFolders", this.msdyn_fieldservicesystemjob_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_fieldservicesystemjob_PrincipalObjectAttributeAccesses", this.msdyn_fieldservicesystemjob_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_fieldservicesystemjob_ProcessSession", this.msdyn_fieldservicesystemjob_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_fieldservicesystemjob_SyncErrors", this.msdyn_fieldservicesystemjob_SyncErrors);
        writer.writeStringValue("msdyn_fieldservicesystemjobid", this.msdyn_fieldservicesystemjobid);
        writer.writeStringValue("msdyn_inputparameter", this.msdyn_inputparameter);
        writer.writeNumberValue("msdyn_inputparametertype", this.msdyn_inputparametertype);
        writer.writeStringValue("msdyn_jobname", this.msdyn_jobname);
        writer.writeNumberValue("msdyn_jobstatus", this.msdyn_jobstatus);
        writer.writeNumberValue("msdyn_jobtype", this.msdyn_jobtype);
        writer.writeStringValue("msdyn_outputparameter", this.msdyn_outputparameter);
        writer.writeNumberValue("msdyn_outputparametertype", this.msdyn_outputparametertype);
        writer.writeObjectValue<Systemuser>("msdyn_ownerid", this.msdyn_ownerid);
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
