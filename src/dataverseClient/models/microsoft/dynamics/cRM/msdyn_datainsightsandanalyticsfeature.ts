import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_dataanalyticsreport_csrmanagerFromDiscriminatorValue} from './createMsdyn_dataanalyticsreport_csrmanagerFromDiscriminatorValue';
import {createMsdyn_dataanalyticsreport_fsFromDiscriminatorValue} from './createMsdyn_dataanalyticsreport_fsFromDiscriminatorValue';
import {createMsdyn_dataanalyticsreport_fspredictrsFromDiscriminatorValue} from './createMsdyn_dataanalyticsreport_fspredictrsFromDiscriminatorValue';
import {createMsdyn_dataanalyticsreport_fspredictwhdFromDiscriminatorValue} from './createMsdyn_dataanalyticsreport_fspredictwhdFromDiscriminatorValue';
import {createMsdyn_dataanalyticsreport_ksinsightsFromDiscriminatorValue} from './createMsdyn_dataanalyticsreport_ksinsightsFromDiscriminatorValue';
import {createMsdyn_dataanalyticsreport_ocFromDiscriminatorValue} from './createMsdyn_dataanalyticsreport_ocFromDiscriminatorValue';
import {createMsdyn_dataanalyticsreport_ocvoiceFromDiscriminatorValue} from './createMsdyn_dataanalyticsreport_ocvoiceFromDiscriminatorValue';
import {createMsdyn_dataanalyticsreport_sutreportingFromDiscriminatorValue} from './createMsdyn_dataanalyticsreport_sutreportingFromDiscriminatorValue';
import {createMsdyn_dataanalyticsreportFromDiscriminatorValue} from './createMsdyn_dataanalyticsreportFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Msdyn_dataanalyticsreport, Msdyn_dataanalyticsreport_csrmanager, Msdyn_dataanalyticsreport_fs, Msdyn_dataanalyticsreport_fspredictrs, Msdyn_dataanalyticsreport_fspredictwhd, Msdyn_dataanalyticsreport_ksinsights, Msdyn_dataanalyticsreport_oc, Msdyn_dataanalyticsreport_ocvoice, Msdyn_dataanalyticsreport_sutreporting, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_datainsightsandanalyticsfeature extends Crmbaseentity implements Parsable {
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
    private _msdyn_analyticschecksum?: number | undefined;
    private _msdyn_dasfeature_dascsrmanager_datainsightsandanalyticsfeatureId?: Msdyn_dataanalyticsreport_csrmanager[] | undefined;
    private _msdyn_dasfeature_dasfs_datainsightsandanalyticsfeatureid?: Msdyn_dataanalyticsreport_fs[] | undefined;
    private _msdyn_dasfeature_dasfspredictrs_datainsightsandanalyticsfeatureid?: Msdyn_dataanalyticsreport_fspredictrs[] | undefined;
    private _msdyn_dasfeature_dasfspredictwhd_datainsightsandanalyticsfeatureid?: Msdyn_dataanalyticsreport_fspredictwhd[] | undefined;
    private _msdyn_dasfeature_dasksi_datainsightsandanalyticsfeatureId?: Msdyn_dataanalyticsreport_ksinsights[] | undefined;
    private _msdyn_dasfeature_dasoc_datainsightsandanalyticsfeatureid?: Msdyn_dataanalyticsreport_oc[] | undefined;
    private _msdyn_dasfeature_dasocvoice_datainsightsandanalyticsfeatureid?: Msdyn_dataanalyticsreport_ocvoice[] | undefined;
    private _msdyn_dasfeature_dassutreporting_datainsightsandanalyticsfeatureid?: Msdyn_dataanalyticsreport_sutreporting[] | undefined;
    private _msdyn_datainsightsandanalyticsfeature_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_datainsightsandanalyticsfeature_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId?: Msdyn_dataanalyticsreport[] | undefined;
    private _msdyn_datainsightsandanalyticsfeature_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_datainsightsandanalyticsfeature_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_datainsightsandanalyticsfeature_ProcessSession?: Processsession[] | undefined;
    private _msdyn_datainsightsandanalyticsfeature_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_datainsightsandanalyticsfeatureid?: string | undefined;
    private _msdyn_isdemoenabled?: boolean | undefined;
    private _msdyn_isenabled?: boolean | undefined;
    private _msdyn_lastaccesstime?: Date | undefined;
    private _msdyn_lastreportrefreshtime?: Date | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_provisionstatus?: number | undefined;
    private _msdyn_templateid?: string | undefined;
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
     * Instantiates a new msdyn_datainsightsandanalyticsfeature and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature)._organizationid_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_analyticschecksum": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_analyticschecksum = n.getNumberValue(); },
            "msdyn_dasfeature_dascsrmanager_datainsightsandanalyticsfeatureId": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_dasfeature_dascsrmanager_datainsightsandanalyticsfeatureId = n.getCollectionOfObjectValues<Msdyn_dataanalyticsreport_csrmanager>(createMsdyn_dataanalyticsreport_csrmanagerFromDiscriminatorValue); },
            "msdyn_dasfeature_dasfs_datainsightsandanalyticsfeatureid": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_dasfeature_dasfs_datainsightsandanalyticsfeatureid = n.getCollectionOfObjectValues<Msdyn_dataanalyticsreport_fs>(createMsdyn_dataanalyticsreport_fsFromDiscriminatorValue); },
            "msdyn_dasfeature_dasfspredictrs_datainsightsandanalyticsfeatureid": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_dasfeature_dasfspredictrs_datainsightsandanalyticsfeatureid = n.getCollectionOfObjectValues<Msdyn_dataanalyticsreport_fspredictrs>(createMsdyn_dataanalyticsreport_fspredictrsFromDiscriminatorValue); },
            "msdyn_dasfeature_dasfspredictwhd_datainsightsandanalyticsfeatureid": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_dasfeature_dasfspredictwhd_datainsightsandanalyticsfeatureid = n.getCollectionOfObjectValues<Msdyn_dataanalyticsreport_fspredictwhd>(createMsdyn_dataanalyticsreport_fspredictwhdFromDiscriminatorValue); },
            "msdyn_dasfeature_dasksi_datainsightsandanalyticsfeatureId": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_dasfeature_dasksi_datainsightsandanalyticsfeatureId = n.getCollectionOfObjectValues<Msdyn_dataanalyticsreport_ksinsights>(createMsdyn_dataanalyticsreport_ksinsightsFromDiscriminatorValue); },
            "msdyn_dasfeature_dasoc_datainsightsandanalyticsfeatureid": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_dasfeature_dasoc_datainsightsandanalyticsfeatureid = n.getCollectionOfObjectValues<Msdyn_dataanalyticsreport_oc>(createMsdyn_dataanalyticsreport_ocFromDiscriminatorValue); },
            "msdyn_dasfeature_dasocvoice_datainsightsandanalyticsfeatureid": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_dasfeature_dasocvoice_datainsightsandanalyticsfeatureid = n.getCollectionOfObjectValues<Msdyn_dataanalyticsreport_ocvoice>(createMsdyn_dataanalyticsreport_ocvoiceFromDiscriminatorValue); },
            "msdyn_dasfeature_dassutreporting_datainsightsandanalyticsfeatureid": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_dasfeature_dassutreporting_datainsightsandanalyticsfeatureid = n.getCollectionOfObjectValues<Msdyn_dataanalyticsreport_sutreporting>(createMsdyn_dataanalyticsreport_sutreportingFromDiscriminatorValue); },
            "msdyn_datainsightsandanalyticsfeature_AsyncOperations": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_datainsightsandanalyticsfeature_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_datainsightsandanalyticsfeature_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_datainsightsandanalyticsfeature_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId = n.getCollectionOfObjectValues<Msdyn_dataanalyticsreport>(createMsdyn_dataanalyticsreportFromDiscriminatorValue); },
            "msdyn_datainsightsandanalyticsfeature_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_datainsightsandanalyticsfeature_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_datainsightsandanalyticsfeature_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_datainsightsandanalyticsfeature_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_datainsightsandanalyticsfeature_ProcessSession": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_datainsightsandanalyticsfeature_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_datainsightsandanalyticsfeature_SyncErrors": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_datainsightsandanalyticsfeature_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_datainsightsandanalyticsfeatureid": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_datainsightsandanalyticsfeatureid = n.getStringValue(); },
            "msdyn_isdemoenabled": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_isdemoenabled = n.getBooleanValue(); },
            "msdyn_isenabled": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_isenabled = n.getBooleanValue(); },
            "msdyn_lastaccesstime": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_lastaccesstime = n.getDateValue(); },
            "msdyn_lastreportrefreshtime": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_lastreportrefreshtime = n.getDateValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_name = n.getStringValue(); },
            "msdyn_provisionstatus": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_provisionstatus = n.getNumberValue(); },
            "msdyn_templateid": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).msdyn_templateid = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).overwritetime = n.getDateValue(); },
            "solutionid": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_datainsightsandanalyticsfeature).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_analyticschecksum property value. 
     * @returns a integer
     */
    public get msdyn_analyticschecksum() {
        return this._msdyn_analyticschecksum;
    };
    /**
     * Sets the msdyn_analyticschecksum property value. 
     * @param value Value to set for the msdyn_analyticschecksum property.
     */
    public set msdyn_analyticschecksum(value: number | undefined) {
        this._msdyn_analyticschecksum = value;
    };
    /**
     * Gets the msdyn_dasfeature_dascsrmanager_datainsightsandanalyticsfeatureId property value. 
     * @returns a msdyn_dataanalyticsreport_csrmanager
     */
    public get msdyn_dasfeature_dascsrmanager_datainsightsandanalyticsfeatureId() {
        return this._msdyn_dasfeature_dascsrmanager_datainsightsandanalyticsfeatureId;
    };
    /**
     * Sets the msdyn_dasfeature_dascsrmanager_datainsightsandanalyticsfeatureId property value. 
     * @param value Value to set for the msdyn_dasfeature_dascsrmanager_datainsightsandanalyticsfeatureId property.
     */
    public set msdyn_dasfeature_dascsrmanager_datainsightsandanalyticsfeatureId(value: Msdyn_dataanalyticsreport_csrmanager[] | undefined) {
        this._msdyn_dasfeature_dascsrmanager_datainsightsandanalyticsfeatureId = value;
    };
    /**
     * Gets the msdyn_dasfeature_dasfs_datainsightsandanalyticsfeatureid property value. 
     * @returns a msdyn_dataanalyticsreport_fs
     */
    public get msdyn_dasfeature_dasfs_datainsightsandanalyticsfeatureid() {
        return this._msdyn_dasfeature_dasfs_datainsightsandanalyticsfeatureid;
    };
    /**
     * Sets the msdyn_dasfeature_dasfs_datainsightsandanalyticsfeatureid property value. 
     * @param value Value to set for the msdyn_dasfeature_dasfs_datainsightsandanalyticsfeatureid property.
     */
    public set msdyn_dasfeature_dasfs_datainsightsandanalyticsfeatureid(value: Msdyn_dataanalyticsreport_fs[] | undefined) {
        this._msdyn_dasfeature_dasfs_datainsightsandanalyticsfeatureid = value;
    };
    /**
     * Gets the msdyn_dasfeature_dasfspredictrs_datainsightsandanalyticsfeatureid property value. 
     * @returns a msdyn_dataanalyticsreport_fspredictrs
     */
    public get msdyn_dasfeature_dasfspredictrs_datainsightsandanalyticsfeatureid() {
        return this._msdyn_dasfeature_dasfspredictrs_datainsightsandanalyticsfeatureid;
    };
    /**
     * Sets the msdyn_dasfeature_dasfspredictrs_datainsightsandanalyticsfeatureid property value. 
     * @param value Value to set for the msdyn_dasfeature_dasfspredictrs_datainsightsandanalyticsfeatureid property.
     */
    public set msdyn_dasfeature_dasfspredictrs_datainsightsandanalyticsfeatureid(value: Msdyn_dataanalyticsreport_fspredictrs[] | undefined) {
        this._msdyn_dasfeature_dasfspredictrs_datainsightsandanalyticsfeatureid = value;
    };
    /**
     * Gets the msdyn_dasfeature_dasfspredictwhd_datainsightsandanalyticsfeatureid property value. 
     * @returns a msdyn_dataanalyticsreport_fspredictwhd
     */
    public get msdyn_dasfeature_dasfspredictwhd_datainsightsandanalyticsfeatureid() {
        return this._msdyn_dasfeature_dasfspredictwhd_datainsightsandanalyticsfeatureid;
    };
    /**
     * Sets the msdyn_dasfeature_dasfspredictwhd_datainsightsandanalyticsfeatureid property value. 
     * @param value Value to set for the msdyn_dasfeature_dasfspredictwhd_datainsightsandanalyticsfeatureid property.
     */
    public set msdyn_dasfeature_dasfspredictwhd_datainsightsandanalyticsfeatureid(value: Msdyn_dataanalyticsreport_fspredictwhd[] | undefined) {
        this._msdyn_dasfeature_dasfspredictwhd_datainsightsandanalyticsfeatureid = value;
    };
    /**
     * Gets the msdyn_dasfeature_dasksi_datainsightsandanalyticsfeatureId property value. 
     * @returns a msdyn_dataanalyticsreport_ksinsights
     */
    public get msdyn_dasfeature_dasksi_datainsightsandanalyticsfeatureId() {
        return this._msdyn_dasfeature_dasksi_datainsightsandanalyticsfeatureId;
    };
    /**
     * Sets the msdyn_dasfeature_dasksi_datainsightsandanalyticsfeatureId property value. 
     * @param value Value to set for the msdyn_dasfeature_dasksi_datainsightsandanalyticsfeatureId property.
     */
    public set msdyn_dasfeature_dasksi_datainsightsandanalyticsfeatureId(value: Msdyn_dataanalyticsreport_ksinsights[] | undefined) {
        this._msdyn_dasfeature_dasksi_datainsightsandanalyticsfeatureId = value;
    };
    /**
     * Gets the msdyn_dasfeature_dasoc_datainsightsandanalyticsfeatureid property value. 
     * @returns a msdyn_dataanalyticsreport_oc
     */
    public get msdyn_dasfeature_dasoc_datainsightsandanalyticsfeatureid() {
        return this._msdyn_dasfeature_dasoc_datainsightsandanalyticsfeatureid;
    };
    /**
     * Sets the msdyn_dasfeature_dasoc_datainsightsandanalyticsfeatureid property value. 
     * @param value Value to set for the msdyn_dasfeature_dasoc_datainsightsandanalyticsfeatureid property.
     */
    public set msdyn_dasfeature_dasoc_datainsightsandanalyticsfeatureid(value: Msdyn_dataanalyticsreport_oc[] | undefined) {
        this._msdyn_dasfeature_dasoc_datainsightsandanalyticsfeatureid = value;
    };
    /**
     * Gets the msdyn_dasfeature_dasocvoice_datainsightsandanalyticsfeatureid property value. 
     * @returns a msdyn_dataanalyticsreport_ocvoice
     */
    public get msdyn_dasfeature_dasocvoice_datainsightsandanalyticsfeatureid() {
        return this._msdyn_dasfeature_dasocvoice_datainsightsandanalyticsfeatureid;
    };
    /**
     * Sets the msdyn_dasfeature_dasocvoice_datainsightsandanalyticsfeatureid property value. 
     * @param value Value to set for the msdyn_dasfeature_dasocvoice_datainsightsandanalyticsfeatureid property.
     */
    public set msdyn_dasfeature_dasocvoice_datainsightsandanalyticsfeatureid(value: Msdyn_dataanalyticsreport_ocvoice[] | undefined) {
        this._msdyn_dasfeature_dasocvoice_datainsightsandanalyticsfeatureid = value;
    };
    /**
     * Gets the msdyn_dasfeature_dassutreporting_datainsightsandanalyticsfeatureid property value. 
     * @returns a msdyn_dataanalyticsreport_sutreporting
     */
    public get msdyn_dasfeature_dassutreporting_datainsightsandanalyticsfeatureid() {
        return this._msdyn_dasfeature_dassutreporting_datainsightsandanalyticsfeatureid;
    };
    /**
     * Sets the msdyn_dasfeature_dassutreporting_datainsightsandanalyticsfeatureid property value. 
     * @param value Value to set for the msdyn_dasfeature_dassutreporting_datainsightsandanalyticsfeatureid property.
     */
    public set msdyn_dasfeature_dassutreporting_datainsightsandanalyticsfeatureid(value: Msdyn_dataanalyticsreport_sutreporting[] | undefined) {
        this._msdyn_dasfeature_dassutreporting_datainsightsandanalyticsfeatureid = value;
    };
    /**
     * Gets the msdyn_datainsightsandanalyticsfeature_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_datainsightsandanalyticsfeature_AsyncOperations() {
        return this._msdyn_datainsightsandanalyticsfeature_AsyncOperations;
    };
    /**
     * Sets the msdyn_datainsightsandanalyticsfeature_AsyncOperations property value. 
     * @param value Value to set for the msdyn_datainsightsandanalyticsfeature_AsyncOperations property.
     */
    public set msdyn_datainsightsandanalyticsfeature_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_datainsightsandanalyticsfeature_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_datainsightsandanalyticsfeature_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_datainsightsandanalyticsfeature_BulkDeleteFailures() {
        return this._msdyn_datainsightsandanalyticsfeature_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_datainsightsandanalyticsfeature_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_datainsightsandanalyticsfeature_BulkDeleteFailures property.
     */
    public set msdyn_datainsightsandanalyticsfeature_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_datainsightsandanalyticsfeature_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId property value. 
     * @returns a msdyn_dataanalyticsreport
     */
    public get msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId() {
        return this._msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId;
    };
    /**
     * Sets the msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId property value. 
     * @param value Value to set for the msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId property.
     */
    public set msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId(value: Msdyn_dataanalyticsreport[] | undefined) {
        this._msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId = value;
    };
    /**
     * Gets the msdyn_datainsightsandanalyticsfeature_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_datainsightsandanalyticsfeature_MailboxTrackingFolders() {
        return this._msdyn_datainsightsandanalyticsfeature_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_datainsightsandanalyticsfeature_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_datainsightsandanalyticsfeature_MailboxTrackingFolders property.
     */
    public set msdyn_datainsightsandanalyticsfeature_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_datainsightsandanalyticsfeature_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_datainsightsandanalyticsfeature_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_datainsightsandanalyticsfeature_PrincipalObjectAttributeAccesses() {
        return this._msdyn_datainsightsandanalyticsfeature_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_datainsightsandanalyticsfeature_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_datainsightsandanalyticsfeature_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_datainsightsandanalyticsfeature_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_datainsightsandanalyticsfeature_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_datainsightsandanalyticsfeature_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_datainsightsandanalyticsfeature_ProcessSession() {
        return this._msdyn_datainsightsandanalyticsfeature_ProcessSession;
    };
    /**
     * Sets the msdyn_datainsightsandanalyticsfeature_ProcessSession property value. 
     * @param value Value to set for the msdyn_datainsightsandanalyticsfeature_ProcessSession property.
     */
    public set msdyn_datainsightsandanalyticsfeature_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_datainsightsandanalyticsfeature_ProcessSession = value;
    };
    /**
     * Gets the msdyn_datainsightsandanalyticsfeature_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_datainsightsandanalyticsfeature_SyncErrors() {
        return this._msdyn_datainsightsandanalyticsfeature_SyncErrors;
    };
    /**
     * Sets the msdyn_datainsightsandanalyticsfeature_SyncErrors property value. 
     * @param value Value to set for the msdyn_datainsightsandanalyticsfeature_SyncErrors property.
     */
    public set msdyn_datainsightsandanalyticsfeature_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_datainsightsandanalyticsfeature_SyncErrors = value;
    };
    /**
     * Gets the msdyn_datainsightsandanalyticsfeatureid property value. 
     * @returns a string
     */
    public get msdyn_datainsightsandanalyticsfeatureid() {
        return this._msdyn_datainsightsandanalyticsfeatureid;
    };
    /**
     * Sets the msdyn_datainsightsandanalyticsfeatureid property value. 
     * @param value Value to set for the msdyn_datainsightsandanalyticsfeatureid property.
     */
    public set msdyn_datainsightsandanalyticsfeatureid(value: string | undefined) {
        this._msdyn_datainsightsandanalyticsfeatureid = value;
    };
    /**
     * Gets the msdyn_isdemoenabled property value. 
     * @returns a boolean
     */
    public get msdyn_isdemoenabled() {
        return this._msdyn_isdemoenabled;
    };
    /**
     * Sets the msdyn_isdemoenabled property value. 
     * @param value Value to set for the msdyn_isdemoenabled property.
     */
    public set msdyn_isdemoenabled(value: boolean | undefined) {
        this._msdyn_isdemoenabled = value;
    };
    /**
     * Gets the msdyn_isenabled property value. 
     * @returns a boolean
     */
    public get msdyn_isenabled() {
        return this._msdyn_isenabled;
    };
    /**
     * Sets the msdyn_isenabled property value. 
     * @param value Value to set for the msdyn_isenabled property.
     */
    public set msdyn_isenabled(value: boolean | undefined) {
        this._msdyn_isenabled = value;
    };
    /**
     * Gets the msdyn_lastaccesstime property value. 
     * @returns a Date
     */
    public get msdyn_lastaccesstime() {
        return this._msdyn_lastaccesstime;
    };
    /**
     * Sets the msdyn_lastaccesstime property value. 
     * @param value Value to set for the msdyn_lastaccesstime property.
     */
    public set msdyn_lastaccesstime(value: Date | undefined) {
        this._msdyn_lastaccesstime = value;
    };
    /**
     * Gets the msdyn_lastreportrefreshtime property value. 
     * @returns a Date
     */
    public get msdyn_lastreportrefreshtime() {
        return this._msdyn_lastreportrefreshtime;
    };
    /**
     * Sets the msdyn_lastreportrefreshtime property value. 
     * @param value Value to set for the msdyn_lastreportrefreshtime property.
     */
    public set msdyn_lastreportrefreshtime(value: Date | undefined) {
        this._msdyn_lastreportrefreshtime = value;
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
     * Gets the msdyn_provisionstatus property value. 
     * @returns a integer
     */
    public get msdyn_provisionstatus() {
        return this._msdyn_provisionstatus;
    };
    /**
     * Sets the msdyn_provisionstatus property value. 
     * @param value Value to set for the msdyn_provisionstatus property.
     */
    public set msdyn_provisionstatus(value: number | undefined) {
        this._msdyn_provisionstatus = value;
    };
    /**
     * Gets the msdyn_templateid property value. 
     * @returns a string
     */
    public get msdyn_templateid() {
        return this._msdyn_templateid;
    };
    /**
     * Sets the msdyn_templateid property value. 
     * @param value Value to set for the msdyn_templateid property.
     */
    public set msdyn_templateid(value: string | undefined) {
        this._msdyn_templateid = value;
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
        writer.writeNumberValue("msdyn_analyticschecksum", this.msdyn_analyticschecksum);
        writer.writeCollectionOfObjectValues<Msdyn_dataanalyticsreport_csrmanager>("msdyn_dasfeature_dascsrmanager_datainsightsandanalyticsfeatureId", this.msdyn_dasfeature_dascsrmanager_datainsightsandanalyticsfeatureId);
        writer.writeCollectionOfObjectValues<Msdyn_dataanalyticsreport_fs>("msdyn_dasfeature_dasfs_datainsightsandanalyticsfeatureid", this.msdyn_dasfeature_dasfs_datainsightsandanalyticsfeatureid);
        writer.writeCollectionOfObjectValues<Msdyn_dataanalyticsreport_fspredictrs>("msdyn_dasfeature_dasfspredictrs_datainsightsandanalyticsfeatureid", this.msdyn_dasfeature_dasfspredictrs_datainsightsandanalyticsfeatureid);
        writer.writeCollectionOfObjectValues<Msdyn_dataanalyticsreport_fspredictwhd>("msdyn_dasfeature_dasfspredictwhd_datainsightsandanalyticsfeatureid", this.msdyn_dasfeature_dasfspredictwhd_datainsightsandanalyticsfeatureid);
        writer.writeCollectionOfObjectValues<Msdyn_dataanalyticsreport_ksinsights>("msdyn_dasfeature_dasksi_datainsightsandanalyticsfeatureId", this.msdyn_dasfeature_dasksi_datainsightsandanalyticsfeatureId);
        writer.writeCollectionOfObjectValues<Msdyn_dataanalyticsreport_oc>("msdyn_dasfeature_dasoc_datainsightsandanalyticsfeatureid", this.msdyn_dasfeature_dasoc_datainsightsandanalyticsfeatureid);
        writer.writeCollectionOfObjectValues<Msdyn_dataanalyticsreport_ocvoice>("msdyn_dasfeature_dasocvoice_datainsightsandanalyticsfeatureid", this.msdyn_dasfeature_dasocvoice_datainsightsandanalyticsfeatureid);
        writer.writeCollectionOfObjectValues<Msdyn_dataanalyticsreport_sutreporting>("msdyn_dasfeature_dassutreporting_datainsightsandanalyticsfeatureid", this.msdyn_dasfeature_dassutreporting_datainsightsandanalyticsfeatureid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_datainsightsandanalyticsfeature_AsyncOperations", this.msdyn_datainsightsandanalyticsfeature_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_datainsightsandanalyticsfeature_BulkDeleteFailures", this.msdyn_datainsightsandanalyticsfeature_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Msdyn_dataanalyticsreport>("msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId", this.msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_datainsightsandanalyticsfeature_MailboxTrackingFolders", this.msdyn_datainsightsandanalyticsfeature_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_datainsightsandanalyticsfeature_PrincipalObjectAttributeAccesses", this.msdyn_datainsightsandanalyticsfeature_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_datainsightsandanalyticsfeature_ProcessSession", this.msdyn_datainsightsandanalyticsfeature_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_datainsightsandanalyticsfeature_SyncErrors", this.msdyn_datainsightsandanalyticsfeature_SyncErrors);
        writer.writeStringValue("msdyn_datainsightsandanalyticsfeatureid", this.msdyn_datainsightsandanalyticsfeatureid);
        writer.writeBooleanValue("msdyn_isdemoenabled", this.msdyn_isdemoenabled);
        writer.writeBooleanValue("msdyn_isenabled", this.msdyn_isenabled);
        writer.writeDateValue("msdyn_lastaccesstime", this.msdyn_lastaccesstime);
        writer.writeDateValue("msdyn_lastreportrefreshtime", this.msdyn_lastreportrefreshtime);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_provisionstatus", this.msdyn_provisionstatus);
        writer.writeStringValue("msdyn_templateid", this.msdyn_templateid);
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
