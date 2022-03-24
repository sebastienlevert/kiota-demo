import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_aibdatasetscontainerFromDiscriminatorValue} from './createMsdyn_aibdatasetscontainerFromDiscriminatorValue';
import {createMsdyn_aiconfigurationFromDiscriminatorValue} from './createMsdyn_aiconfigurationFromDiscriminatorValue';
import {createMsdyn_aitemplateFromDiscriminatorValue} from './createMsdyn_aitemplateFromDiscriminatorValue';
import {createMsdyn_decisionrulesetFromDiscriminatorValue} from './createMsdyn_decisionrulesetFromDiscriminatorValue';
import {createMsdyn_effortpredictionresultFromDiscriminatorValue} from './createMsdyn_effortpredictionresultFromDiscriminatorValue';
import {createMsdyn_iermlmodelFromDiscriminatorValue} from './createMsdyn_iermlmodelFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemcharacteristicFromDiscriminatorValue} from './createMsdyn_ocliveworkitemcharacteristicFromDiscriminatorValue';
import {createMsdyn_ocskillidentmlmodelFromDiscriminatorValue} from './createMsdyn_ocskillidentmlmodelFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createWorkflowFromDiscriminatorValue} from './createWorkflowFromDiscriminatorValue';
import {Annotation, Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyn_aibdatasetscontainer, Msdyn_aiconfiguration, Msdyn_aitemplate, Msdyn_decisionruleset, Msdyn_effortpredictionresult, Msdyn_iermlmodel, Msdyn_ocliveworkitemcharacteristic, Msdyn_ocskillidentmlmodel, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Workflow} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_aimodel extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_activerunconfigurationid_value?: string | undefined;
    private __msdyn_retrainworkflowid_value?: string | undefined;
    private __msdyn_scheduleinferenceworkflowid_value?: string | undefined;
    private __msdyn_templateid_value?: string | undefined;
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
    private _msdyn_AIBDatasetsContainer_msdyn_AIModelI?: Msdyn_aibdatasetscontainer[] | undefined;
    private _msdyn_aimodel_Annotations?: Annotation[] | undefined;
    private _msdyn_aimodel_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_aimodel_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_aimodel_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_aimodel_msdyn_aiconfiguration?: Msdyn_aiconfiguration[] | undefined;
    private _msdyn_aimodel_msdyn_decisionruleset_aibmodelid?: Msdyn_decisionruleset[] | undefined;
    private _msdyn_aimodel_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_aimodel_ProcessSession?: Processsession[] | undefined;
    private _msdyn_aimodel_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_aimodelid?: string | undefined;
    private _msdyn_aimodelidunique?: string | undefined;
    private _msdyn_iermlmodel_aimodelid_msdyn?: Msdyn_iermlmodel[] | undefined;
    private _msdyn_modelcreationcontext?: string | undefined;
    private _msdyn_msdyn_aimodel_msdyn_effortpredictionresult_msdyn_aimodelid?: Msdyn_effortpredictionresult[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_ocliveworkitemcharacteristic_mlmodelid?: Msdyn_ocliveworkitemcharacteristic[] | undefined;
    private _msdyn_ocskillidentmlmodel_aimodelid_msdyn?: Msdyn_ocskillidentmlmodel[] | undefined;
    private _msdyn_retrainworkflowid?: Workflow | undefined;
    private _msdyn_scheduleinferenceworkflowid?: Workflow | undefined;
    private _msdyn_sharewithorganizationoncreate?: boolean | undefined;
    private _msdyn_TemplateId?: Msdyn_aitemplate | undefined;
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
     * Gets the _msdyn_activerunconfigurationid_value property value. 
     * @returns a string
     */
    public get _msdyn_activerunconfigurationid_value() {
        return this.__msdyn_activerunconfigurationid_value;
    };
    /**
     * Sets the _msdyn_activerunconfigurationid_value property value. 
     * @param value Value to set for the _msdyn_activerunconfigurationid_value property.
     */
    public set _msdyn_activerunconfigurationid_value(value: string | undefined) {
        this.__msdyn_activerunconfigurationid_value = value;
    };
    /**
     * Gets the _msdyn_retrainworkflowid_value property value. 
     * @returns a string
     */
    public get _msdyn_retrainworkflowid_value() {
        return this.__msdyn_retrainworkflowid_value;
    };
    /**
     * Sets the _msdyn_retrainworkflowid_value property value. 
     * @param value Value to set for the _msdyn_retrainworkflowid_value property.
     */
    public set _msdyn_retrainworkflowid_value(value: string | undefined) {
        this.__msdyn_retrainworkflowid_value = value;
    };
    /**
     * Gets the _msdyn_scheduleinferenceworkflowid_value property value. 
     * @returns a string
     */
    public get _msdyn_scheduleinferenceworkflowid_value() {
        return this.__msdyn_scheduleinferenceworkflowid_value;
    };
    /**
     * Sets the _msdyn_scheduleinferenceworkflowid_value property value. 
     * @param value Value to set for the _msdyn_scheduleinferenceworkflowid_value property.
     */
    public set _msdyn_scheduleinferenceworkflowid_value(value: string | undefined) {
        this.__msdyn_scheduleinferenceworkflowid_value = value;
    };
    /**
     * Gets the _msdyn_templateid_value property value. 
     * @returns a string
     */
    public get _msdyn_templateid_value() {
        return this.__msdyn_templateid_value;
    };
    /**
     * Sets the _msdyn_templateid_value property value. 
     * @param value Value to set for the _msdyn_templateid_value property.
     */
    public set _msdyn_templateid_value(value: string | undefined) {
        this.__msdyn_templateid_value = value;
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
     * Instantiates a new msdyn_aimodel and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_aimodel)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_aimodel)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_aimodel)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_aimodel)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_activerunconfigurationid_value": (o, n) => { (o as unknown as Msdyn_aimodel)._msdyn_activerunconfigurationid_value = n.getStringValue(); },
            "_msdyn_retrainworkflowid_value": (o, n) => { (o as unknown as Msdyn_aimodel)._msdyn_retrainworkflowid_value = n.getStringValue(); },
            "_msdyn_scheduleinferenceworkflowid_value": (o, n) => { (o as unknown as Msdyn_aimodel)._msdyn_scheduleinferenceworkflowid_value = n.getStringValue(); },
            "_msdyn_templateid_value": (o, n) => { (o as unknown as Msdyn_aimodel)._msdyn_templateid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_aimodel)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_aimodel)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_aimodel)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_aimodel)._owninguser_value = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Msdyn_aimodel).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_aimodel).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_aimodel).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_aimodel).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_aimodel).importsequencenumber = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Msdyn_aimodel).introducedversion = n.getStringValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Msdyn_aimodel).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Msdyn_aimodel).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_aimodel).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_aimodel).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_aimodel).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_AIBDatasetsContainer_msdyn_AIModelI": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_AIBDatasetsContainer_msdyn_AIModelI = n.getCollectionOfObjectValues<Msdyn_aibdatasetscontainer>(createMsdyn_aibdatasetscontainerFromDiscriminatorValue); },
            "msdyn_aimodel_Annotations": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_aimodel_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_aimodel_AsyncOperations": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_aimodel_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_aimodel_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_aimodel_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_aimodel_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_aimodel_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_aimodel_msdyn_aiconfiguration": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_aimodel_msdyn_aiconfiguration = n.getCollectionOfObjectValues<Msdyn_aiconfiguration>(createMsdyn_aiconfigurationFromDiscriminatorValue); },
            "msdyn_aimodel_msdyn_decisionruleset_aibmodelid": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_aimodel_msdyn_decisionruleset_aibmodelid = n.getCollectionOfObjectValues<Msdyn_decisionruleset>(createMsdyn_decisionrulesetFromDiscriminatorValue); },
            "msdyn_aimodel_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_aimodel_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_aimodel_ProcessSession": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_aimodel_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_aimodel_SyncErrors": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_aimodel_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_aimodelid": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_aimodelid = n.getStringValue(); },
            "msdyn_aimodelidunique": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_aimodelidunique = n.getStringValue(); },
            "msdyn_iermlmodel_aimodelid_msdyn": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_iermlmodel_aimodelid_msdyn = n.getCollectionOfObjectValues<Msdyn_iermlmodel>(createMsdyn_iermlmodelFromDiscriminatorValue); },
            "msdyn_modelcreationcontext": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_modelcreationcontext = n.getStringValue(); },
            "msdyn_msdyn_aimodel_msdyn_effortpredictionresult_msdyn_aimodelid": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_msdyn_aimodel_msdyn_effortpredictionresult_msdyn_aimodelid = n.getCollectionOfObjectValues<Msdyn_effortpredictionresult>(createMsdyn_effortpredictionresultFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_name = n.getStringValue(); },
            "msdyn_ocliveworkitemcharacteristic_mlmodelid": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_ocliveworkitemcharacteristic_mlmodelid = n.getCollectionOfObjectValues<Msdyn_ocliveworkitemcharacteristic>(createMsdyn_ocliveworkitemcharacteristicFromDiscriminatorValue); },
            "msdyn_ocskillidentmlmodel_aimodelid_msdyn": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_ocskillidentmlmodel_aimodelid_msdyn = n.getCollectionOfObjectValues<Msdyn_ocskillidentmlmodel>(createMsdyn_ocskillidentmlmodelFromDiscriminatorValue); },
            "msdyn_retrainworkflowid": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_retrainworkflowid = n.getObjectValue<Workflow>(createWorkflowFromDiscriminatorValue); },
            "msdyn_scheduleinferenceworkflowid": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_scheduleinferenceworkflowid = n.getObjectValue<Workflow>(createWorkflowFromDiscriminatorValue); },
            "msdyn_sharewithorganizationoncreate": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_sharewithorganizationoncreate = n.getBooleanValue(); },
            "msdyn_TemplateId": (o, n) => { (o as unknown as Msdyn_aimodel).msdyn_TemplateId = n.getObjectValue<Msdyn_aitemplate>(createMsdyn_aitemplateFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_aimodel).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Msdyn_aimodel).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_aimodel).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_aimodel).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_aimodel).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_aimodel).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Msdyn_aimodel).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_aimodel).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_aimodel).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_aimodel).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_aimodel).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_aimodel).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_AIBDatasetsContainer_msdyn_AIModelI property value. 
     * @returns a msdyn_aibdatasetscontainer
     */
    public get msdyn_AIBDatasetsContainer_msdyn_AIModelI() {
        return this._msdyn_AIBDatasetsContainer_msdyn_AIModelI;
    };
    /**
     * Sets the msdyn_AIBDatasetsContainer_msdyn_AIModelI property value. 
     * @param value Value to set for the msdyn_AIBDatasetsContainer_msdyn_AIModelI property.
     */
    public set msdyn_AIBDatasetsContainer_msdyn_AIModelI(value: Msdyn_aibdatasetscontainer[] | undefined) {
        this._msdyn_AIBDatasetsContainer_msdyn_AIModelI = value;
    };
    /**
     * Gets the msdyn_aimodel_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_aimodel_Annotations() {
        return this._msdyn_aimodel_Annotations;
    };
    /**
     * Sets the msdyn_aimodel_Annotations property value. 
     * @param value Value to set for the msdyn_aimodel_Annotations property.
     */
    public set msdyn_aimodel_Annotations(value: Annotation[] | undefined) {
        this._msdyn_aimodel_Annotations = value;
    };
    /**
     * Gets the msdyn_aimodel_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_aimodel_AsyncOperations() {
        return this._msdyn_aimodel_AsyncOperations;
    };
    /**
     * Sets the msdyn_aimodel_AsyncOperations property value. 
     * @param value Value to set for the msdyn_aimodel_AsyncOperations property.
     */
    public set msdyn_aimodel_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_aimodel_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_aimodel_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_aimodel_BulkDeleteFailures() {
        return this._msdyn_aimodel_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_aimodel_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_aimodel_BulkDeleteFailures property.
     */
    public set msdyn_aimodel_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_aimodel_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_aimodel_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_aimodel_MailboxTrackingFolders() {
        return this._msdyn_aimodel_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_aimodel_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_aimodel_MailboxTrackingFolders property.
     */
    public set msdyn_aimodel_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_aimodel_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_aimodel_msdyn_aiconfiguration property value. 
     * @returns a msdyn_aiconfiguration
     */
    public get msdyn_aimodel_msdyn_aiconfiguration() {
        return this._msdyn_aimodel_msdyn_aiconfiguration;
    };
    /**
     * Sets the msdyn_aimodel_msdyn_aiconfiguration property value. 
     * @param value Value to set for the msdyn_aimodel_msdyn_aiconfiguration property.
     */
    public set msdyn_aimodel_msdyn_aiconfiguration(value: Msdyn_aiconfiguration[] | undefined) {
        this._msdyn_aimodel_msdyn_aiconfiguration = value;
    };
    /**
     * Gets the msdyn_aimodel_msdyn_decisionruleset_aibmodelid property value. 
     * @returns a msdyn_decisionruleset
     */
    public get msdyn_aimodel_msdyn_decisionruleset_aibmodelid() {
        return this._msdyn_aimodel_msdyn_decisionruleset_aibmodelid;
    };
    /**
     * Sets the msdyn_aimodel_msdyn_decisionruleset_aibmodelid property value. 
     * @param value Value to set for the msdyn_aimodel_msdyn_decisionruleset_aibmodelid property.
     */
    public set msdyn_aimodel_msdyn_decisionruleset_aibmodelid(value: Msdyn_decisionruleset[] | undefined) {
        this._msdyn_aimodel_msdyn_decisionruleset_aibmodelid = value;
    };
    /**
     * Gets the msdyn_aimodel_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_aimodel_PrincipalObjectAttributeAccesses() {
        return this._msdyn_aimodel_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_aimodel_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_aimodel_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_aimodel_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_aimodel_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_aimodel_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_aimodel_ProcessSession() {
        return this._msdyn_aimodel_ProcessSession;
    };
    /**
     * Sets the msdyn_aimodel_ProcessSession property value. 
     * @param value Value to set for the msdyn_aimodel_ProcessSession property.
     */
    public set msdyn_aimodel_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_aimodel_ProcessSession = value;
    };
    /**
     * Gets the msdyn_aimodel_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_aimodel_SyncErrors() {
        return this._msdyn_aimodel_SyncErrors;
    };
    /**
     * Sets the msdyn_aimodel_SyncErrors property value. 
     * @param value Value to set for the msdyn_aimodel_SyncErrors property.
     */
    public set msdyn_aimodel_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_aimodel_SyncErrors = value;
    };
    /**
     * Gets the msdyn_aimodelid property value. 
     * @returns a string
     */
    public get msdyn_aimodelid() {
        return this._msdyn_aimodelid;
    };
    /**
     * Sets the msdyn_aimodelid property value. 
     * @param value Value to set for the msdyn_aimodelid property.
     */
    public set msdyn_aimodelid(value: string | undefined) {
        this._msdyn_aimodelid = value;
    };
    /**
     * Gets the msdyn_aimodelidunique property value. 
     * @returns a string
     */
    public get msdyn_aimodelidunique() {
        return this._msdyn_aimodelidunique;
    };
    /**
     * Sets the msdyn_aimodelidunique property value. 
     * @param value Value to set for the msdyn_aimodelidunique property.
     */
    public set msdyn_aimodelidunique(value: string | undefined) {
        this._msdyn_aimodelidunique = value;
    };
    /**
     * Gets the msdyn_iermlmodel_aimodelid_msdyn property value. 
     * @returns a msdyn_iermlmodel
     */
    public get msdyn_iermlmodel_aimodelid_msdyn() {
        return this._msdyn_iermlmodel_aimodelid_msdyn;
    };
    /**
     * Sets the msdyn_iermlmodel_aimodelid_msdyn property value. 
     * @param value Value to set for the msdyn_iermlmodel_aimodelid_msdyn property.
     */
    public set msdyn_iermlmodel_aimodelid_msdyn(value: Msdyn_iermlmodel[] | undefined) {
        this._msdyn_iermlmodel_aimodelid_msdyn = value;
    };
    /**
     * Gets the msdyn_modelcreationcontext property value. 
     * @returns a string
     */
    public get msdyn_modelcreationcontext() {
        return this._msdyn_modelcreationcontext;
    };
    /**
     * Sets the msdyn_modelcreationcontext property value. 
     * @param value Value to set for the msdyn_modelcreationcontext property.
     */
    public set msdyn_modelcreationcontext(value: string | undefined) {
        this._msdyn_modelcreationcontext = value;
    };
    /**
     * Gets the msdyn_msdyn_aimodel_msdyn_effortpredictionresult_msdyn_aimodelid property value. 
     * @returns a msdyn_effortpredictionresult
     */
    public get msdyn_msdyn_aimodel_msdyn_effortpredictionresult_msdyn_aimodelid() {
        return this._msdyn_msdyn_aimodel_msdyn_effortpredictionresult_msdyn_aimodelid;
    };
    /**
     * Sets the msdyn_msdyn_aimodel_msdyn_effortpredictionresult_msdyn_aimodelid property value. 
     * @param value Value to set for the msdyn_msdyn_aimodel_msdyn_effortpredictionresult_msdyn_aimodelid property.
     */
    public set msdyn_msdyn_aimodel_msdyn_effortpredictionresult_msdyn_aimodelid(value: Msdyn_effortpredictionresult[] | undefined) {
        this._msdyn_msdyn_aimodel_msdyn_effortpredictionresult_msdyn_aimodelid = value;
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
     * Gets the msdyn_ocliveworkitemcharacteristic_mlmodelid property value. 
     * @returns a msdyn_ocliveworkitemcharacteristic
     */
    public get msdyn_ocliveworkitemcharacteristic_mlmodelid() {
        return this._msdyn_ocliveworkitemcharacteristic_mlmodelid;
    };
    /**
     * Sets the msdyn_ocliveworkitemcharacteristic_mlmodelid property value. 
     * @param value Value to set for the msdyn_ocliveworkitemcharacteristic_mlmodelid property.
     */
    public set msdyn_ocliveworkitemcharacteristic_mlmodelid(value: Msdyn_ocliveworkitemcharacteristic[] | undefined) {
        this._msdyn_ocliveworkitemcharacteristic_mlmodelid = value;
    };
    /**
     * Gets the msdyn_ocskillidentmlmodel_aimodelid_msdyn property value. 
     * @returns a msdyn_ocskillidentmlmodel
     */
    public get msdyn_ocskillidentmlmodel_aimodelid_msdyn() {
        return this._msdyn_ocskillidentmlmodel_aimodelid_msdyn;
    };
    /**
     * Sets the msdyn_ocskillidentmlmodel_aimodelid_msdyn property value. 
     * @param value Value to set for the msdyn_ocskillidentmlmodel_aimodelid_msdyn property.
     */
    public set msdyn_ocskillidentmlmodel_aimodelid_msdyn(value: Msdyn_ocskillidentmlmodel[] | undefined) {
        this._msdyn_ocskillidentmlmodel_aimodelid_msdyn = value;
    };
    /**
     * Gets the msdyn_retrainworkflowid property value. 
     * @returns a workflow
     */
    public get msdyn_retrainworkflowid() {
        return this._msdyn_retrainworkflowid;
    };
    /**
     * Sets the msdyn_retrainworkflowid property value. 
     * @param value Value to set for the msdyn_retrainworkflowid property.
     */
    public set msdyn_retrainworkflowid(value: Workflow | undefined) {
        this._msdyn_retrainworkflowid = value;
    };
    /**
     * Gets the msdyn_scheduleinferenceworkflowid property value. 
     * @returns a workflow
     */
    public get msdyn_scheduleinferenceworkflowid() {
        return this._msdyn_scheduleinferenceworkflowid;
    };
    /**
     * Sets the msdyn_scheduleinferenceworkflowid property value. 
     * @param value Value to set for the msdyn_scheduleinferenceworkflowid property.
     */
    public set msdyn_scheduleinferenceworkflowid(value: Workflow | undefined) {
        this._msdyn_scheduleinferenceworkflowid = value;
    };
    /**
     * Gets the msdyn_sharewithorganizationoncreate property value. 
     * @returns a boolean
     */
    public get msdyn_sharewithorganizationoncreate() {
        return this._msdyn_sharewithorganizationoncreate;
    };
    /**
     * Sets the msdyn_sharewithorganizationoncreate property value. 
     * @param value Value to set for the msdyn_sharewithorganizationoncreate property.
     */
    public set msdyn_sharewithorganizationoncreate(value: boolean | undefined) {
        this._msdyn_sharewithorganizationoncreate = value;
    };
    /**
     * Gets the msdyn_TemplateId property value. 
     * @returns a msdyn_aitemplate
     */
    public get msdyn_TemplateId() {
        return this._msdyn_TemplateId;
    };
    /**
     * Sets the msdyn_TemplateId property value. 
     * @param value Value to set for the msdyn_TemplateId property.
     */
    public set msdyn_TemplateId(value: Msdyn_aitemplate | undefined) {
        this._msdyn_TemplateId = value;
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
        writer.writeStringValue("_msdyn_activerunconfigurationid_value", this._msdyn_activerunconfigurationid_value);
        writer.writeStringValue("_msdyn_retrainworkflowid_value", this._msdyn_retrainworkflowid_value);
        writer.writeStringValue("_msdyn_scheduleinferenceworkflowid_value", this._msdyn_scheduleinferenceworkflowid_value);
        writer.writeStringValue("_msdyn_templateid_value", this._msdyn_templateid_value);
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
        writer.writeCollectionOfObjectValues<Msdyn_aibdatasetscontainer>("msdyn_AIBDatasetsContainer_msdyn_AIModelI", this.msdyn_AIBDatasetsContainer_msdyn_AIModelI);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_aimodel_Annotations", this.msdyn_aimodel_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_aimodel_AsyncOperations", this.msdyn_aimodel_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_aimodel_BulkDeleteFailures", this.msdyn_aimodel_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_aimodel_MailboxTrackingFolders", this.msdyn_aimodel_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_aiconfiguration>("msdyn_aimodel_msdyn_aiconfiguration", this.msdyn_aimodel_msdyn_aiconfiguration);
        writer.writeCollectionOfObjectValues<Msdyn_decisionruleset>("msdyn_aimodel_msdyn_decisionruleset_aibmodelid", this.msdyn_aimodel_msdyn_decisionruleset_aibmodelid);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_aimodel_PrincipalObjectAttributeAccesses", this.msdyn_aimodel_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_aimodel_ProcessSession", this.msdyn_aimodel_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_aimodel_SyncErrors", this.msdyn_aimodel_SyncErrors);
        writer.writeStringValue("msdyn_aimodelid", this.msdyn_aimodelid);
        writer.writeStringValue("msdyn_aimodelidunique", this.msdyn_aimodelidunique);
        writer.writeCollectionOfObjectValues<Msdyn_iermlmodel>("msdyn_iermlmodel_aimodelid_msdyn", this.msdyn_iermlmodel_aimodelid_msdyn);
        writer.writeStringValue("msdyn_modelcreationcontext", this.msdyn_modelcreationcontext);
        writer.writeCollectionOfObjectValues<Msdyn_effortpredictionresult>("msdyn_msdyn_aimodel_msdyn_effortpredictionresult_msdyn_aimodelid", this.msdyn_msdyn_aimodel_msdyn_effortpredictionresult_msdyn_aimodelid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitemcharacteristic>("msdyn_ocliveworkitemcharacteristic_mlmodelid", this.msdyn_ocliveworkitemcharacteristic_mlmodelid);
        writer.writeCollectionOfObjectValues<Msdyn_ocskillidentmlmodel>("msdyn_ocskillidentmlmodel_aimodelid_msdyn", this.msdyn_ocskillidentmlmodel_aimodelid_msdyn);
        writer.writeObjectValue<Workflow>("msdyn_retrainworkflowid", this.msdyn_retrainworkflowid);
        writer.writeObjectValue<Workflow>("msdyn_scheduleinferenceworkflowid", this.msdyn_scheduleinferenceworkflowid);
        writer.writeBooleanValue("msdyn_sharewithorganizationoncreate", this.msdyn_sharewithorganizationoncreate);
        writer.writeObjectValue<Msdyn_aitemplate>("msdyn_TemplateId", this.msdyn_TemplateId);
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
