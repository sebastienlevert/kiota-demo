import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionreferenceFromDiscriminatorValue} from './createConnectionreferenceFromDiscriminatorValue';
import {createFileattachmentFromDiscriminatorValue} from './createFileattachmentFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_aiconfigurationFromDiscriminatorValue} from './createMsdyn_aiconfigurationFromDiscriminatorValue';
import {createMsdyn_aifptrainingdocumentFromDiscriminatorValue} from './createMsdyn_aifptrainingdocumentFromDiscriminatorValue';
import {createMsdyn_aimodelFromDiscriminatorValue} from './createMsdyn_aimodelFromDiscriminatorValue';
import {createMsdyn_aiodlabelFromDiscriminatorValue} from './createMsdyn_aiodlabelFromDiscriminatorValue';
import {createMsdyn_aiodtrainingimageFromDiscriminatorValue} from './createMsdyn_aiodtrainingimageFromDiscriminatorValue';
import {createMsdyn_iermltrainingFromDiscriminatorValue} from './createMsdyn_iermltrainingFromDiscriminatorValue';
import {createMsdyn_ocsimltrainingFromDiscriminatorValue} from './createMsdyn_ocsimltrainingFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Connectionreference, Crmbaseentity, Fileattachment, Mailboxtrackingfolder, Msdyn_aifptrainingdocument, Msdyn_aimodel, Msdyn_aiodlabel, Msdyn_aiodtrainingimage, Msdyn_iermltraining, Msdyn_ocsimltraining, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_aiconfiguration extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_aimodelid_value?: string | undefined;
    private __msdyn_connectionreferenceid_value?: string | undefined;
    private __msdyn_createdfromconfigurationid_value?: string | undefined;
    private __msdyn_trainedmodelaiconfigurationpareid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _introducedversion?: string | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_aiconfiguration_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_aiconfiguration_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_aiconfiguration_FileAttachments?: Fileattachment[] | undefined;
    private _msdyn_aiconfiguration_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_aiconfiguration_msdyn_aiconfiguration?: Msdyn_aiconfiguration[] | undefined;
    private _msdyn_aiconfiguration_msdyn_aiodtrainingimage?: Msdyn_aiodtrainingimage[] | undefined;
    private _msdyn_aiconfiguration_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_aiconfiguration_ProcessSession?: Processsession[] | undefined;
    private _msdyn_aiconfiguration_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_aiconfigurationid?: string | undefined;
    private _msdyn_aiconfigurationidunique?: string | undefined;
    private _msdyn_AIModelId?: Msdyn_aimodel | undefined;
    private _msdyn_aiodlabel_msdyn_aiconfiguration?: Msdyn_aiodlabel[] | undefined;
    private _msdyn_ConnectionReferenceId?: Connectionreference | undefined;
    private _msdyn_createdfromconfiguration_msdyn_toconfiguration?: Msdyn_aiconfiguration[] | undefined;
    private _msdyn_CreatedFromConfigurationId?: Msdyn_aiconfiguration | undefined;
    private _msdyn_customconfiguration?: string | undefined;
    private _msdyn_databinding?: string | undefined;
    private _msdyn_iermltraining_publishaiconfiguration?: Msdyn_iermltraining[] | undefined;
    private _msdyn_iermltraining_trainaiconfiguration?: Msdyn_iermltraining[] | undefined;
    private _msdyn_lasterrors?: string | undefined;
    private _msdyn_lasttrainorrundate?: Date | undefined;
    private _msdyn_majoriterationnumber?: number | undefined;
    private _msdyn_minoriterationnumber?: number | undefined;
    private _msdyn_model?: string | undefined;
    private _msdyn_model_name?: string | undefined;
    private _msdyn_modeldata?: string | undefined;
    private _msdyn_modelglobalexplainability?: string | undefined;
    private _msdyn_modelperformance?: string | undefined;
    private _msdyn_modelprovisioningmetadata?: string | undefined;
    private _msdyn_modelprovisioningstatus?: string | undefined;
    private _msdyn_modelrundataspecification?: string | undefined;
    private _msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId?: Msdyn_aifptrainingdocument[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_ocsimltraining_publishaiconfigurati?: Msdyn_ocsimltraining[] | undefined;
    private _msdyn_ocsimltraining_trainaiconfiguration?: Msdyn_ocsimltraining[] | undefined;
    private _msdyn_resourceinfo?: string | undefined;
    private _msdyn_runconfiguration?: string | undefined;
    private _msdyn_schedulingoptions?: string | undefined;
    private _msdyn_templateversion?: number | undefined;
    private _msdyn_TrainedModelAIConfigurationPareId?: Msdyn_aiconfiguration | undefined;
    private _msdyn_type?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
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
     * Gets the _msdyn_aimodelid_value property value. 
     * @returns a string
     */
    public get _msdyn_aimodelid_value() {
        return this.__msdyn_aimodelid_value;
    };
    /**
     * Sets the _msdyn_aimodelid_value property value. 
     * @param value Value to set for the _msdyn_aimodelid_value property.
     */
    public set _msdyn_aimodelid_value(value: string | undefined) {
        this.__msdyn_aimodelid_value = value;
    };
    /**
     * Gets the _msdyn_connectionreferenceid_value property value. 
     * @returns a string
     */
    public get _msdyn_connectionreferenceid_value() {
        return this.__msdyn_connectionreferenceid_value;
    };
    /**
     * Sets the _msdyn_connectionreferenceid_value property value. 
     * @param value Value to set for the _msdyn_connectionreferenceid_value property.
     */
    public set _msdyn_connectionreferenceid_value(value: string | undefined) {
        this.__msdyn_connectionreferenceid_value = value;
    };
    /**
     * Gets the _msdyn_createdfromconfigurationid_value property value. 
     * @returns a string
     */
    public get _msdyn_createdfromconfigurationid_value() {
        return this.__msdyn_createdfromconfigurationid_value;
    };
    /**
     * Sets the _msdyn_createdfromconfigurationid_value property value. 
     * @param value Value to set for the _msdyn_createdfromconfigurationid_value property.
     */
    public set _msdyn_createdfromconfigurationid_value(value: string | undefined) {
        this.__msdyn_createdfromconfigurationid_value = value;
    };
    /**
     * Gets the _msdyn_trainedmodelaiconfigurationpareid_value property value. 
     * @returns a string
     */
    public get _msdyn_trainedmodelaiconfigurationpareid_value() {
        return this.__msdyn_trainedmodelaiconfigurationpareid_value;
    };
    /**
     * Sets the _msdyn_trainedmodelaiconfigurationpareid_value property value. 
     * @param value Value to set for the _msdyn_trainedmodelaiconfigurationpareid_value property.
     */
    public set _msdyn_trainedmodelaiconfigurationpareid_value(value: string | undefined) {
        this.__msdyn_trainedmodelaiconfigurationpareid_value = value;
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
     * Instantiates a new msdyn_aiconfiguration and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_aiconfiguration)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_aiconfiguration)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_aiconfiguration)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_aiconfiguration)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_aimodelid_value": (o, n) => { (o as unknown as Msdyn_aiconfiguration)._msdyn_aimodelid_value = n.getStringValue(); },
            "_msdyn_connectionreferenceid_value": (o, n) => { (o as unknown as Msdyn_aiconfiguration)._msdyn_connectionreferenceid_value = n.getStringValue(); },
            "_msdyn_createdfromconfigurationid_value": (o, n) => { (o as unknown as Msdyn_aiconfiguration)._msdyn_createdfromconfigurationid_value = n.getStringValue(); },
            "_msdyn_trainedmodelaiconfigurationpareid_value": (o, n) => { (o as unknown as Msdyn_aiconfiguration)._msdyn_trainedmodelaiconfigurationpareid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_aiconfiguration)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_aiconfiguration)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_aiconfiguration)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_aiconfiguration)._owninguser_value = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Msdyn_aiconfiguration).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_aiconfiguration).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_aiconfiguration).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_aiconfiguration).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_aiconfiguration).importsequencenumber = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Msdyn_aiconfiguration).introducedversion = n.getStringValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Msdyn_aiconfiguration).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Msdyn_aiconfiguration).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_aiconfiguration).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_aiconfiguration).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_aiconfiguration).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_aiconfiguration_AsyncOperations": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_aiconfiguration_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_aiconfiguration_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_aiconfiguration_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_aiconfiguration_FileAttachments": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_aiconfiguration_FileAttachments = n.getCollectionOfObjectValues<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "msdyn_aiconfiguration_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_aiconfiguration_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_aiconfiguration_msdyn_aiconfiguration": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_aiconfiguration_msdyn_aiconfiguration = n.getCollectionOfObjectValues<Msdyn_aiconfiguration>(createMsdyn_aiconfigurationFromDiscriminatorValue); },
            "msdyn_aiconfiguration_msdyn_aiodtrainingimage": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_aiconfiguration_msdyn_aiodtrainingimage = n.getCollectionOfObjectValues<Msdyn_aiodtrainingimage>(createMsdyn_aiodtrainingimageFromDiscriminatorValue); },
            "msdyn_aiconfiguration_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_aiconfiguration_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_aiconfiguration_ProcessSession": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_aiconfiguration_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_aiconfiguration_SyncErrors": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_aiconfiguration_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_aiconfigurationid": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_aiconfigurationid = n.getStringValue(); },
            "msdyn_aiconfigurationidunique": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_aiconfigurationidunique = n.getStringValue(); },
            "msdyn_AIModelId": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_AIModelId = n.getObjectValue<Msdyn_aimodel>(createMsdyn_aimodelFromDiscriminatorValue); },
            "msdyn_aiodlabel_msdyn_aiconfiguration": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_aiodlabel_msdyn_aiconfiguration = n.getCollectionOfObjectValues<Msdyn_aiodlabel>(createMsdyn_aiodlabelFromDiscriminatorValue); },
            "msdyn_ConnectionReferenceId": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_ConnectionReferenceId = n.getObjectValue<Connectionreference>(createConnectionreferenceFromDiscriminatorValue); },
            "msdyn_createdfromconfiguration_msdyn_toconfiguration": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_createdfromconfiguration_msdyn_toconfiguration = n.getCollectionOfObjectValues<Msdyn_aiconfiguration>(createMsdyn_aiconfigurationFromDiscriminatorValue); },
            "msdyn_CreatedFromConfigurationId": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_CreatedFromConfigurationId = n.getObjectValue<Msdyn_aiconfiguration>(createMsdyn_aiconfigurationFromDiscriminatorValue); },
            "msdyn_customconfiguration": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_customconfiguration = n.getStringValue(); },
            "msdyn_databinding": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_databinding = n.getStringValue(); },
            "msdyn_iermltraining_publishaiconfiguration": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_iermltraining_publishaiconfiguration = n.getCollectionOfObjectValues<Msdyn_iermltraining>(createMsdyn_iermltrainingFromDiscriminatorValue); },
            "msdyn_iermltraining_trainaiconfiguration": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_iermltraining_trainaiconfiguration = n.getCollectionOfObjectValues<Msdyn_iermltraining>(createMsdyn_iermltrainingFromDiscriminatorValue); },
            "msdyn_lasterrors": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_lasterrors = n.getStringValue(); },
            "msdyn_lasttrainorrundate": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_lasttrainorrundate = n.getDateValue(); },
            "msdyn_majoriterationnumber": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_majoriterationnumber = n.getNumberValue(); },
            "msdyn_minoriterationnumber": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_minoriterationnumber = n.getNumberValue(); },
            "msdyn_model": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_model = n.getStringValue(); },
            "msdyn_model_name": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_model_name = n.getStringValue(); },
            "msdyn_modeldata": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_modeldata = n.getStringValue(); },
            "msdyn_modelglobalexplainability": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_modelglobalexplainability = n.getStringValue(); },
            "msdyn_modelperformance": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_modelperformance = n.getStringValue(); },
            "msdyn_modelprovisioningmetadata": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_modelprovisioningmetadata = n.getStringValue(); },
            "msdyn_modelprovisioningstatus": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_modelprovisioningstatus = n.getStringValue(); },
            "msdyn_modelrundataspecification": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_modelrundataspecification = n.getStringValue(); },
            "msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId = n.getCollectionOfObjectValues<Msdyn_aifptrainingdocument>(createMsdyn_aifptrainingdocumentFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_name = n.getStringValue(); },
            "msdyn_ocsimltraining_publishaiconfigurati": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_ocsimltraining_publishaiconfigurati = n.getCollectionOfObjectValues<Msdyn_ocsimltraining>(createMsdyn_ocsimltrainingFromDiscriminatorValue); },
            "msdyn_ocsimltraining_trainaiconfiguration": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_ocsimltraining_trainaiconfiguration = n.getCollectionOfObjectValues<Msdyn_ocsimltraining>(createMsdyn_ocsimltrainingFromDiscriminatorValue); },
            "msdyn_resourceinfo": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_resourceinfo = n.getStringValue(); },
            "msdyn_runconfiguration": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_runconfiguration = n.getStringValue(); },
            "msdyn_schedulingoptions": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_schedulingoptions = n.getStringValue(); },
            "msdyn_templateversion": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_templateversion = n.getNumberValue(); },
            "msdyn_TrainedModelAIConfigurationPareId": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_TrainedModelAIConfigurationPareId = n.getObjectValue<Msdyn_aiconfiguration>(createMsdyn_aiconfigurationFromDiscriminatorValue); },
            "msdyn_type": (o, n) => { (o as unknown as Msdyn_aiconfiguration).msdyn_type = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_aiconfiguration).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Msdyn_aiconfiguration).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_aiconfiguration).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_aiconfiguration).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_aiconfiguration).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_aiconfiguration).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Msdyn_aiconfiguration).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_aiconfiguration).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_aiconfiguration).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_aiconfiguration).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_aiconfiguration).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_aiconfiguration).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_aiconfiguration_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_aiconfiguration_AsyncOperations() {
        return this._msdyn_aiconfiguration_AsyncOperations;
    };
    /**
     * Sets the msdyn_aiconfiguration_AsyncOperations property value. 
     * @param value Value to set for the msdyn_aiconfiguration_AsyncOperations property.
     */
    public set msdyn_aiconfiguration_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_aiconfiguration_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_aiconfiguration_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_aiconfiguration_BulkDeleteFailures() {
        return this._msdyn_aiconfiguration_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_aiconfiguration_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_aiconfiguration_BulkDeleteFailures property.
     */
    public set msdyn_aiconfiguration_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_aiconfiguration_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_aiconfiguration_FileAttachments property value. 
     * @returns a fileattachment
     */
    public get msdyn_aiconfiguration_FileAttachments() {
        return this._msdyn_aiconfiguration_FileAttachments;
    };
    /**
     * Sets the msdyn_aiconfiguration_FileAttachments property value. 
     * @param value Value to set for the msdyn_aiconfiguration_FileAttachments property.
     */
    public set msdyn_aiconfiguration_FileAttachments(value: Fileattachment[] | undefined) {
        this._msdyn_aiconfiguration_FileAttachments = value;
    };
    /**
     * Gets the msdyn_aiconfiguration_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_aiconfiguration_MailboxTrackingFolders() {
        return this._msdyn_aiconfiguration_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_aiconfiguration_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_aiconfiguration_MailboxTrackingFolders property.
     */
    public set msdyn_aiconfiguration_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_aiconfiguration_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_aiconfiguration_msdyn_aiconfiguration property value. 
     * @returns a msdyn_aiconfiguration
     */
    public get msdyn_aiconfiguration_msdyn_aiconfiguration() {
        return this._msdyn_aiconfiguration_msdyn_aiconfiguration;
    };
    /**
     * Sets the msdyn_aiconfiguration_msdyn_aiconfiguration property value. 
     * @param value Value to set for the msdyn_aiconfiguration_msdyn_aiconfiguration property.
     */
    public set msdyn_aiconfiguration_msdyn_aiconfiguration(value: Msdyn_aiconfiguration[] | undefined) {
        this._msdyn_aiconfiguration_msdyn_aiconfiguration = value;
    };
    /**
     * Gets the msdyn_aiconfiguration_msdyn_aiodtrainingimage property value. 
     * @returns a msdyn_aiodtrainingimage
     */
    public get msdyn_aiconfiguration_msdyn_aiodtrainingimage() {
        return this._msdyn_aiconfiguration_msdyn_aiodtrainingimage;
    };
    /**
     * Sets the msdyn_aiconfiguration_msdyn_aiodtrainingimage property value. 
     * @param value Value to set for the msdyn_aiconfiguration_msdyn_aiodtrainingimage property.
     */
    public set msdyn_aiconfiguration_msdyn_aiodtrainingimage(value: Msdyn_aiodtrainingimage[] | undefined) {
        this._msdyn_aiconfiguration_msdyn_aiodtrainingimage = value;
    };
    /**
     * Gets the msdyn_aiconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_aiconfiguration_PrincipalObjectAttributeAccesses() {
        return this._msdyn_aiconfiguration_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_aiconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_aiconfiguration_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_aiconfiguration_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_aiconfiguration_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_aiconfiguration_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_aiconfiguration_ProcessSession() {
        return this._msdyn_aiconfiguration_ProcessSession;
    };
    /**
     * Sets the msdyn_aiconfiguration_ProcessSession property value. 
     * @param value Value to set for the msdyn_aiconfiguration_ProcessSession property.
     */
    public set msdyn_aiconfiguration_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_aiconfiguration_ProcessSession = value;
    };
    /**
     * Gets the msdyn_aiconfiguration_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_aiconfiguration_SyncErrors() {
        return this._msdyn_aiconfiguration_SyncErrors;
    };
    /**
     * Sets the msdyn_aiconfiguration_SyncErrors property value. 
     * @param value Value to set for the msdyn_aiconfiguration_SyncErrors property.
     */
    public set msdyn_aiconfiguration_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_aiconfiguration_SyncErrors = value;
    };
    /**
     * Gets the msdyn_aiconfigurationid property value. 
     * @returns a string
     */
    public get msdyn_aiconfigurationid() {
        return this._msdyn_aiconfigurationid;
    };
    /**
     * Sets the msdyn_aiconfigurationid property value. 
     * @param value Value to set for the msdyn_aiconfigurationid property.
     */
    public set msdyn_aiconfigurationid(value: string | undefined) {
        this._msdyn_aiconfigurationid = value;
    };
    /**
     * Gets the msdyn_aiconfigurationidunique property value. 
     * @returns a string
     */
    public get msdyn_aiconfigurationidunique() {
        return this._msdyn_aiconfigurationidunique;
    };
    /**
     * Sets the msdyn_aiconfigurationidunique property value. 
     * @param value Value to set for the msdyn_aiconfigurationidunique property.
     */
    public set msdyn_aiconfigurationidunique(value: string | undefined) {
        this._msdyn_aiconfigurationidunique = value;
    };
    /**
     * Gets the msdyn_AIModelId property value. 
     * @returns a msdyn_aimodel
     */
    public get msdyn_AIModelId() {
        return this._msdyn_AIModelId;
    };
    /**
     * Sets the msdyn_AIModelId property value. 
     * @param value Value to set for the msdyn_AIModelId property.
     */
    public set msdyn_AIModelId(value: Msdyn_aimodel | undefined) {
        this._msdyn_AIModelId = value;
    };
    /**
     * Gets the msdyn_aiodlabel_msdyn_aiconfiguration property value. 
     * @returns a msdyn_aiodlabel
     */
    public get msdyn_aiodlabel_msdyn_aiconfiguration() {
        return this._msdyn_aiodlabel_msdyn_aiconfiguration;
    };
    /**
     * Sets the msdyn_aiodlabel_msdyn_aiconfiguration property value. 
     * @param value Value to set for the msdyn_aiodlabel_msdyn_aiconfiguration property.
     */
    public set msdyn_aiodlabel_msdyn_aiconfiguration(value: Msdyn_aiodlabel[] | undefined) {
        this._msdyn_aiodlabel_msdyn_aiconfiguration = value;
    };
    /**
     * Gets the msdyn_ConnectionReferenceId property value. 
     * @returns a connectionreference
     */
    public get msdyn_ConnectionReferenceId() {
        return this._msdyn_ConnectionReferenceId;
    };
    /**
     * Sets the msdyn_ConnectionReferenceId property value. 
     * @param value Value to set for the msdyn_ConnectionReferenceId property.
     */
    public set msdyn_ConnectionReferenceId(value: Connectionreference | undefined) {
        this._msdyn_ConnectionReferenceId = value;
    };
    /**
     * Gets the msdyn_createdfromconfiguration_msdyn_toconfiguration property value. 
     * @returns a msdyn_aiconfiguration
     */
    public get msdyn_createdfromconfiguration_msdyn_toconfiguration() {
        return this._msdyn_createdfromconfiguration_msdyn_toconfiguration;
    };
    /**
     * Sets the msdyn_createdfromconfiguration_msdyn_toconfiguration property value. 
     * @param value Value to set for the msdyn_createdfromconfiguration_msdyn_toconfiguration property.
     */
    public set msdyn_createdfromconfiguration_msdyn_toconfiguration(value: Msdyn_aiconfiguration[] | undefined) {
        this._msdyn_createdfromconfiguration_msdyn_toconfiguration = value;
    };
    /**
     * Gets the msdyn_CreatedFromConfigurationId property value. 
     * @returns a msdyn_aiconfiguration
     */
    public get msdyn_CreatedFromConfigurationId() {
        return this._msdyn_CreatedFromConfigurationId;
    };
    /**
     * Sets the msdyn_CreatedFromConfigurationId property value. 
     * @param value Value to set for the msdyn_CreatedFromConfigurationId property.
     */
    public set msdyn_CreatedFromConfigurationId(value: Msdyn_aiconfiguration | undefined) {
        this._msdyn_CreatedFromConfigurationId = value;
    };
    /**
     * Gets the msdyn_customconfiguration property value. 
     * @returns a string
     */
    public get msdyn_customconfiguration() {
        return this._msdyn_customconfiguration;
    };
    /**
     * Sets the msdyn_customconfiguration property value. 
     * @param value Value to set for the msdyn_customconfiguration property.
     */
    public set msdyn_customconfiguration(value: string | undefined) {
        this._msdyn_customconfiguration = value;
    };
    /**
     * Gets the msdyn_databinding property value. 
     * @returns a string
     */
    public get msdyn_databinding() {
        return this._msdyn_databinding;
    };
    /**
     * Sets the msdyn_databinding property value. 
     * @param value Value to set for the msdyn_databinding property.
     */
    public set msdyn_databinding(value: string | undefined) {
        this._msdyn_databinding = value;
    };
    /**
     * Gets the msdyn_iermltraining_publishaiconfiguration property value. 
     * @returns a msdyn_iermltraining
     */
    public get msdyn_iermltraining_publishaiconfiguration() {
        return this._msdyn_iermltraining_publishaiconfiguration;
    };
    /**
     * Sets the msdyn_iermltraining_publishaiconfiguration property value. 
     * @param value Value to set for the msdyn_iermltraining_publishaiconfiguration property.
     */
    public set msdyn_iermltraining_publishaiconfiguration(value: Msdyn_iermltraining[] | undefined) {
        this._msdyn_iermltraining_publishaiconfiguration = value;
    };
    /**
     * Gets the msdyn_iermltraining_trainaiconfiguration property value. 
     * @returns a msdyn_iermltraining
     */
    public get msdyn_iermltraining_trainaiconfiguration() {
        return this._msdyn_iermltraining_trainaiconfiguration;
    };
    /**
     * Sets the msdyn_iermltraining_trainaiconfiguration property value. 
     * @param value Value to set for the msdyn_iermltraining_trainaiconfiguration property.
     */
    public set msdyn_iermltraining_trainaiconfiguration(value: Msdyn_iermltraining[] | undefined) {
        this._msdyn_iermltraining_trainaiconfiguration = value;
    };
    /**
     * Gets the msdyn_lasterrors property value. 
     * @returns a string
     */
    public get msdyn_lasterrors() {
        return this._msdyn_lasterrors;
    };
    /**
     * Sets the msdyn_lasterrors property value. 
     * @param value Value to set for the msdyn_lasterrors property.
     */
    public set msdyn_lasterrors(value: string | undefined) {
        this._msdyn_lasterrors = value;
    };
    /**
     * Gets the msdyn_lasttrainorrundate property value. 
     * @returns a Date
     */
    public get msdyn_lasttrainorrundate() {
        return this._msdyn_lasttrainorrundate;
    };
    /**
     * Sets the msdyn_lasttrainorrundate property value. 
     * @param value Value to set for the msdyn_lasttrainorrundate property.
     */
    public set msdyn_lasttrainorrundate(value: Date | undefined) {
        this._msdyn_lasttrainorrundate = value;
    };
    /**
     * Gets the msdyn_majoriterationnumber property value. 
     * @returns a integer
     */
    public get msdyn_majoriterationnumber() {
        return this._msdyn_majoriterationnumber;
    };
    /**
     * Sets the msdyn_majoriterationnumber property value. 
     * @param value Value to set for the msdyn_majoriterationnumber property.
     */
    public set msdyn_majoriterationnumber(value: number | undefined) {
        this._msdyn_majoriterationnumber = value;
    };
    /**
     * Gets the msdyn_minoriterationnumber property value. 
     * @returns a integer
     */
    public get msdyn_minoriterationnumber() {
        return this._msdyn_minoriterationnumber;
    };
    /**
     * Sets the msdyn_minoriterationnumber property value. 
     * @param value Value to set for the msdyn_minoriterationnumber property.
     */
    public set msdyn_minoriterationnumber(value: number | undefined) {
        this._msdyn_minoriterationnumber = value;
    };
    /**
     * Gets the msdyn_model property value. 
     * @returns a binary
     */
    public get msdyn_model() {
        return this._msdyn_model;
    };
    /**
     * Sets the msdyn_model property value. 
     * @param value Value to set for the msdyn_model property.
     */
    public set msdyn_model(value: string | undefined) {
        this._msdyn_model = value;
    };
    /**
     * Gets the msdyn_model_name property value. 
     * @returns a string
     */
    public get msdyn_model_name() {
        return this._msdyn_model_name;
    };
    /**
     * Sets the msdyn_model_name property value. 
     * @param value Value to set for the msdyn_model_name property.
     */
    public set msdyn_model_name(value: string | undefined) {
        this._msdyn_model_name = value;
    };
    /**
     * Gets the msdyn_modeldata property value. 
     * @returns a string
     */
    public get msdyn_modeldata() {
        return this._msdyn_modeldata;
    };
    /**
     * Sets the msdyn_modeldata property value. 
     * @param value Value to set for the msdyn_modeldata property.
     */
    public set msdyn_modeldata(value: string | undefined) {
        this._msdyn_modeldata = value;
    };
    /**
     * Gets the msdyn_modelglobalexplainability property value. 
     * @returns a string
     */
    public get msdyn_modelglobalexplainability() {
        return this._msdyn_modelglobalexplainability;
    };
    /**
     * Sets the msdyn_modelglobalexplainability property value. 
     * @param value Value to set for the msdyn_modelglobalexplainability property.
     */
    public set msdyn_modelglobalexplainability(value: string | undefined) {
        this._msdyn_modelglobalexplainability = value;
    };
    /**
     * Gets the msdyn_modelperformance property value. 
     * @returns a string
     */
    public get msdyn_modelperformance() {
        return this._msdyn_modelperformance;
    };
    /**
     * Sets the msdyn_modelperformance property value. 
     * @param value Value to set for the msdyn_modelperformance property.
     */
    public set msdyn_modelperformance(value: string | undefined) {
        this._msdyn_modelperformance = value;
    };
    /**
     * Gets the msdyn_modelprovisioningmetadata property value. 
     * @returns a string
     */
    public get msdyn_modelprovisioningmetadata() {
        return this._msdyn_modelprovisioningmetadata;
    };
    /**
     * Sets the msdyn_modelprovisioningmetadata property value. 
     * @param value Value to set for the msdyn_modelprovisioningmetadata property.
     */
    public set msdyn_modelprovisioningmetadata(value: string | undefined) {
        this._msdyn_modelprovisioningmetadata = value;
    };
    /**
     * Gets the msdyn_modelprovisioningstatus property value. 
     * @returns a string
     */
    public get msdyn_modelprovisioningstatus() {
        return this._msdyn_modelprovisioningstatus;
    };
    /**
     * Sets the msdyn_modelprovisioningstatus property value. 
     * @param value Value to set for the msdyn_modelprovisioningstatus property.
     */
    public set msdyn_modelprovisioningstatus(value: string | undefined) {
        this._msdyn_modelprovisioningstatus = value;
    };
    /**
     * Gets the msdyn_modelrundataspecification property value. 
     * @returns a string
     */
    public get msdyn_modelrundataspecification() {
        return this._msdyn_modelrundataspecification;
    };
    /**
     * Sets the msdyn_modelrundataspecification property value. 
     * @param value Value to set for the msdyn_modelrundataspecification property.
     */
    public set msdyn_modelrundataspecification(value: string | undefined) {
        this._msdyn_modelrundataspecification = value;
    };
    /**
     * Gets the msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId property value. 
     * @returns a msdyn_aifptrainingdocument
     */
    public get msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId() {
        return this._msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId;
    };
    /**
     * Sets the msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId property value. 
     * @param value Value to set for the msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId property.
     */
    public set msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId(value: Msdyn_aifptrainingdocument[] | undefined) {
        this._msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId = value;
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
     * Gets the msdyn_ocsimltraining_publishaiconfigurati property value. 
     * @returns a msdyn_ocsimltraining
     */
    public get msdyn_ocsimltraining_publishaiconfigurati() {
        return this._msdyn_ocsimltraining_publishaiconfigurati;
    };
    /**
     * Sets the msdyn_ocsimltraining_publishaiconfigurati property value. 
     * @param value Value to set for the msdyn_ocsimltraining_publishaiconfigurati property.
     */
    public set msdyn_ocsimltraining_publishaiconfigurati(value: Msdyn_ocsimltraining[] | undefined) {
        this._msdyn_ocsimltraining_publishaiconfigurati = value;
    };
    /**
     * Gets the msdyn_ocsimltraining_trainaiconfiguration property value. 
     * @returns a msdyn_ocsimltraining
     */
    public get msdyn_ocsimltraining_trainaiconfiguration() {
        return this._msdyn_ocsimltraining_trainaiconfiguration;
    };
    /**
     * Sets the msdyn_ocsimltraining_trainaiconfiguration property value. 
     * @param value Value to set for the msdyn_ocsimltraining_trainaiconfiguration property.
     */
    public set msdyn_ocsimltraining_trainaiconfiguration(value: Msdyn_ocsimltraining[] | undefined) {
        this._msdyn_ocsimltraining_trainaiconfiguration = value;
    };
    /**
     * Gets the msdyn_resourceinfo property value. 
     * @returns a string
     */
    public get msdyn_resourceinfo() {
        return this._msdyn_resourceinfo;
    };
    /**
     * Sets the msdyn_resourceinfo property value. 
     * @param value Value to set for the msdyn_resourceinfo property.
     */
    public set msdyn_resourceinfo(value: string | undefined) {
        this._msdyn_resourceinfo = value;
    };
    /**
     * Gets the msdyn_runconfiguration property value. 
     * @returns a string
     */
    public get msdyn_runconfiguration() {
        return this._msdyn_runconfiguration;
    };
    /**
     * Sets the msdyn_runconfiguration property value. 
     * @param value Value to set for the msdyn_runconfiguration property.
     */
    public set msdyn_runconfiguration(value: string | undefined) {
        this._msdyn_runconfiguration = value;
    };
    /**
     * Gets the msdyn_schedulingoptions property value. 
     * @returns a string
     */
    public get msdyn_schedulingoptions() {
        return this._msdyn_schedulingoptions;
    };
    /**
     * Sets the msdyn_schedulingoptions property value. 
     * @param value Value to set for the msdyn_schedulingoptions property.
     */
    public set msdyn_schedulingoptions(value: string | undefined) {
        this._msdyn_schedulingoptions = value;
    };
    /**
     * Gets the msdyn_templateversion property value. 
     * @returns a integer
     */
    public get msdyn_templateversion() {
        return this._msdyn_templateversion;
    };
    /**
     * Sets the msdyn_templateversion property value. 
     * @param value Value to set for the msdyn_templateversion property.
     */
    public set msdyn_templateversion(value: number | undefined) {
        this._msdyn_templateversion = value;
    };
    /**
     * Gets the msdyn_TrainedModelAIConfigurationPareId property value. 
     * @returns a msdyn_aiconfiguration
     */
    public get msdyn_TrainedModelAIConfigurationPareId() {
        return this._msdyn_TrainedModelAIConfigurationPareId;
    };
    /**
     * Sets the msdyn_TrainedModelAIConfigurationPareId property value. 
     * @param value Value to set for the msdyn_TrainedModelAIConfigurationPareId property.
     */
    public set msdyn_TrainedModelAIConfigurationPareId(value: Msdyn_aiconfiguration | undefined) {
        this._msdyn_TrainedModelAIConfigurationPareId = value;
    };
    /**
     * Gets the msdyn_type property value. 
     * @returns a integer
     */
    public get msdyn_type() {
        return this._msdyn_type;
    };
    /**
     * Sets the msdyn_type property value. 
     * @param value Value to set for the msdyn_type property.
     */
    public set msdyn_type(value: number | undefined) {
        this._msdyn_type = value;
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
        writer.writeStringValue("_msdyn_aimodelid_value", this._msdyn_aimodelid_value);
        writer.writeStringValue("_msdyn_connectionreferenceid_value", this._msdyn_connectionreferenceid_value);
        writer.writeStringValue("_msdyn_createdfromconfigurationid_value", this._msdyn_createdfromconfigurationid_value);
        writer.writeStringValue("_msdyn_trainedmodelaiconfigurationpareid_value", this._msdyn_trainedmodelaiconfigurationpareid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_aiconfiguration_AsyncOperations", this.msdyn_aiconfiguration_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_aiconfiguration_BulkDeleteFailures", this.msdyn_aiconfiguration_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Fileattachment>("msdyn_aiconfiguration_FileAttachments", this.msdyn_aiconfiguration_FileAttachments);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_aiconfiguration_MailboxTrackingFolders", this.msdyn_aiconfiguration_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_aiconfiguration>("msdyn_aiconfiguration_msdyn_aiconfiguration", this.msdyn_aiconfiguration_msdyn_aiconfiguration);
        writer.writeCollectionOfObjectValues<Msdyn_aiodtrainingimage>("msdyn_aiconfiguration_msdyn_aiodtrainingimage", this.msdyn_aiconfiguration_msdyn_aiodtrainingimage);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_aiconfiguration_PrincipalObjectAttributeAccesses", this.msdyn_aiconfiguration_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_aiconfiguration_ProcessSession", this.msdyn_aiconfiguration_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_aiconfiguration_SyncErrors", this.msdyn_aiconfiguration_SyncErrors);
        writer.writeStringValue("msdyn_aiconfigurationid", this.msdyn_aiconfigurationid);
        writer.writeStringValue("msdyn_aiconfigurationidunique", this.msdyn_aiconfigurationidunique);
        writer.writeObjectValue<Msdyn_aimodel>("msdyn_AIModelId", this.msdyn_AIModelId);
        writer.writeCollectionOfObjectValues<Msdyn_aiodlabel>("msdyn_aiodlabel_msdyn_aiconfiguration", this.msdyn_aiodlabel_msdyn_aiconfiguration);
        writer.writeObjectValue<Connectionreference>("msdyn_ConnectionReferenceId", this.msdyn_ConnectionReferenceId);
        writer.writeCollectionOfObjectValues<Msdyn_aiconfiguration>("msdyn_createdfromconfiguration_msdyn_toconfiguration", this.msdyn_createdfromconfiguration_msdyn_toconfiguration);
        writer.writeObjectValue<Msdyn_aiconfiguration>("msdyn_CreatedFromConfigurationId", this.msdyn_CreatedFromConfigurationId);
        writer.writeStringValue("msdyn_customconfiguration", this.msdyn_customconfiguration);
        writer.writeStringValue("msdyn_databinding", this.msdyn_databinding);
        writer.writeCollectionOfObjectValues<Msdyn_iermltraining>("msdyn_iermltraining_publishaiconfiguration", this.msdyn_iermltraining_publishaiconfiguration);
        writer.writeCollectionOfObjectValues<Msdyn_iermltraining>("msdyn_iermltraining_trainaiconfiguration", this.msdyn_iermltraining_trainaiconfiguration);
        writer.writeStringValue("msdyn_lasterrors", this.msdyn_lasterrors);
        writer.writeDateValue("msdyn_lasttrainorrundate", this.msdyn_lasttrainorrundate);
        writer.writeNumberValue("msdyn_majoriterationnumber", this.msdyn_majoriterationnumber);
        writer.writeNumberValue("msdyn_minoriterationnumber", this.msdyn_minoriterationnumber);
        writer.writeStringValue("msdyn_model", this.msdyn_model);
        writer.writeStringValue("msdyn_model_name", this.msdyn_model_name);
        writer.writeStringValue("msdyn_modeldata", this.msdyn_modeldata);
        writer.writeStringValue("msdyn_modelglobalexplainability", this.msdyn_modelglobalexplainability);
        writer.writeStringValue("msdyn_modelperformance", this.msdyn_modelperformance);
        writer.writeStringValue("msdyn_modelprovisioningmetadata", this.msdyn_modelprovisioningmetadata);
        writer.writeStringValue("msdyn_modelprovisioningstatus", this.msdyn_modelprovisioningstatus);
        writer.writeStringValue("msdyn_modelrundataspecification", this.msdyn_modelrundataspecification);
        writer.writeCollectionOfObjectValues<Msdyn_aifptrainingdocument>("msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId", this.msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Msdyn_ocsimltraining>("msdyn_ocsimltraining_publishaiconfigurati", this.msdyn_ocsimltraining_publishaiconfigurati);
        writer.writeCollectionOfObjectValues<Msdyn_ocsimltraining>("msdyn_ocsimltraining_trainaiconfiguration", this.msdyn_ocsimltraining_trainaiconfiguration);
        writer.writeStringValue("msdyn_resourceinfo", this.msdyn_resourceinfo);
        writer.writeStringValue("msdyn_runconfiguration", this.msdyn_runconfiguration);
        writer.writeStringValue("msdyn_schedulingoptions", this.msdyn_schedulingoptions);
        writer.writeNumberValue("msdyn_templateversion", this.msdyn_templateversion);
        writer.writeObjectValue<Msdyn_aiconfiguration>("msdyn_TrainedModelAIConfigurationPareId", this.msdyn_TrainedModelAIConfigurationPareId);
        writer.writeNumberValue("msdyn_type", this.msdyn_type);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
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
